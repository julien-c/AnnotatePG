var App = App || {};

if (window.location.hostname === 'localhost') {
	App.API = 'http://localhost/reaaad-api/';
}
else {
	App.API = 'http://reaaad-api.julien-c.fr/';
}

App.Utils = {
	postJSON: function(url, data){
		return $.ajax({
			url: url,
			type: 'POST',
			data: JSON.stringify(data), 
			contentType: 'application/json',
			dataType: 'json'
		});
	}
};


Monocle.DEBUG = true;

var events = ['monocle:incompatible', 'monocle:initializing', 'monocle:loading', 'monocle:styles', 'monocle:frameprimed', 'monocle:loaded', 'monocle:notfound', 'monocle:componentloading', 'monocle:componentloaded', 'monocle:componentfailed', 'monocle:componentchanging', 'monocle:componentmodify', 'monocle:componentchange', 'monocle:firstcomponentchange', 'monocle:pagechange', 'monocle:boundarystart', 'monocle:boundaryend', 'monocle:turn', 'monocle:resizing', 'monocle:resize', 'monocle:recalculating', 'monocle:recalculated', 'monocle:jumping', 'monocle:jump', 'monocle:stylesheetchanging', 'monocle:stylesheetchange', 'monocle:interactive:on', 'monocle:interactive:off', 'monocle:controlhide', 'monocle:controlshow', 'monocle:selection', 'monocle:deselection'];

events.forEach(function(evtName){
	Monocle.Events.listen('reader', evtName, function(evt){
		// console.log(evt.type);
		if (evt.type === 'monocle:controlshow') {
			// console.log(evt.m.control);
		}
	});
});




var bookData = Monocle.bookData({components: ['components/1.html', 'components/2.html', 'components/3.html'], chapters:[{title: "The Signal Man", src: "components/1.html"}, {title: "The Haunted House", src: "components/2.html", children: [{title: "Chapter I - The Mortals in the House", src: "components/2.html#p2ch1"}, {title: "Chapter II - The Ghost in Master B.'s Room", src: "components/2.html#p2ch2"} ] }, {title: "The Trial for Murder", src: "components/3.html"} ], metadata: {title: "Three Ghost Stories", creator: "Charles Dickens"} });



App.reader = Monocle.Reader(
	'reader', 
	bookData, 
	{
		panels: Monocle.Panels.Marginal,
		stylesheet: 
			'body { font-family: Domine; line-height: 28px; color: #222; padding-top: 20px; } ' +
			'.sentence {cursor: pointer;} .sentence:hover {background-color: #FFF4A2;} ' +
			'.highlight { background-color: #FFF4A2; } ',
		flipper: Monocle.Flippers.Scroller
	},
	function(reader){
		Monocle.toc = Monocle.Controls.Contents(reader);
		reader.addControl(Monocle.toc, 'popover', {hidden: true});
		
		// @see https://github.com/joseph/Monocle/pull/173
		var scrubber = document.getElementById('scrubber');
		scrubber.dom = new Monocle.Factory(scrubber, 'scrubber', null, reader);
		Monocle.scrubber = new Monocle.Controls.Scrubber(reader);
		reader.addControl(Monocle.scrubber, 'explicit', {node: scrubber});
		
		/* PAGE NUMBER RUNNING HEAD */
		var pageNumber = {
			runners: [],
			createControlElements: function (page) {
				var cntr = document.createElement('div');
				cntr.className = "pageNumber";
				var runner = document.createElement('div');
				runner.className = "runner";
				cntr.appendChild(runner);
				this.runners.push(runner);
				this.update(page, page.m.place.pageNumber());
				return cntr;
			},
			update: function (page, pageNumber) {
				if (pageNumber) {
					this.runners[page.m.pageIndex].innerHTML = pageNumber;
				}
			}
		};
		reader.addControl(pageNumber, 'page');
		reader.listen(
			'monocle:pagechange',
			function (evt) {
				pageNumber.update(evt.m.page, evt.m.pageNumber);
			}
		);
	}
);

// Apply content styles:

Monocle.Events.listen('reader', 'monocle:componentmodify', function(evt){
	var css = document.createElement('link');
	css.type = 'text/css';
	css.rel  = 'stylesheet';
	css.href = 'http://fonts.googleapis.com/css?family=Domine:400,700';
	evt.m.document.head.appendChild(css);
});



$(document).ready(function(){
	$('.toc-handle').click(function(){
		if (Monocle.toc.properties.hidden) {
			App.reader.showControl(Monocle.toc);
		}
		else {
			App.reader.hideControl(Monocle.toc);
		}
	});
	
	$('.ctrl-left').click(function(){
		App.reader.moveTo({ page: App.reader.getPlace().pageNumber() - 1});
	});
	$('.ctrl-right').click(function(){
		App.reader.moveTo({ page: App.reader.getPlace().pageNumber() + 1});
	});
	$('body').keydown(function(e){
		if (e.which == 37) {
			App.reader.moveTo({ page: App.reader.getPlace().pageNumber() - 1});
		}
		else if (e.which == 39) {
			App.reader.moveTo({ page: App.reader.getPlace().pageNumber() + 1});
		}
	});
	
	$('a.close').click(function(e){
		e.preventDefault();
		$('.ctrl-panel').addClass('hidden');
	});
});


// Chapter title :

App.reader.listen('monocle:pagechange',
	function (evt) {
		var place = App.reader.getPlace(evt.m.page);
		if (place) {
			$('.chapter-title').text(place.chapterTitle());
		}
	}
);

// Ranges and Sentences:

// Monocle.Events.listen('reader', 'monocle:selection', function(evt){
// 	console.log('rangy serialization:');
// 	var s = rangy.serializeRange(evt.m.range.range, true, evt.m.document.body);
// 	console.log(s);
// });

Monocle.buffer = [];
Monocle.Events.listen('reader', 'monocle:deselection', function(evt){
	console.log('DESELECT:');
	var s = rangy.serializeRange(evt.m.range.range, true, evt.m.document.body);
	console.log(s);
	Monocle.buffer.push(s);
});

App.componentmap = {};
/*
Monocle.Events.listen('reader', 'monocle:componentmodify', function(evt){
	var component = evt.m.component.properties.id;
	App.sentences[component].forEach(function(s){
		
		// if (!rangy.canDeserializeRange(s, evt.m.document.body, evt.m.document)) {
		// 	console.log('canDeserializeRange: FALSE', s);
		// }
		
		var range = rangy.deserializeRange(s, evt.m.document.body, evt.m.document);
		
		// console.log(range);
		
		// if (!range.canSurroundContents()) {
		// 	console.log('canSurroundContents: FALSE', range);
		// }
		
		var span = document.createElement('span');
		span.className = 'sentence';
		$(span).attr('data-id', s);
		// Attach click handler:
		$(span).click(function(){
			App.panel.open({
				excerpt: $(this).text(),
				component: component,
				sentence: s
			});
		});
		
		// Insert span:
		range.surroundContents(span);
		
	});
	
	$.get(App.API + 'component', {component: component}, function(sentences){
		
		App.componentmap = sentences;
		
		$.each(sentences, function(sentence, count){
			$(evt.m.document.body).find('.sentence[data-id="' + sentence + '"]').each(function(){
				$(this).addClass('highlight');
			});
		});
	});
});
*/
['monocle:pagechange', 'monocle:boundarystart', 'monocle:boundaryend'].forEach(function(evtName){
	App.reader.listen(evtName, function(evt){
		App.panel.retract();
	});
});



// Simplistic user account system:

if (window.location.hash) {
	var user = window.location.hash.substring(1).split(',');
	Monocle.user = {
		email: $.trim(user[0]),
		name: $.trim(user[1])
	};
}
else {
	Monocle.user = {
		email: "chaumond@gmail.com",
		name: "Julien Chaumond"
	};
}

console.log(Monocle.user);


$(document).ready(function(){
	$('form', '.ctrl-panel').submit(function(e){
		e.preventDefault();
		var comment = {
			user: Monocle.user,
			document: $('.document', this).val(),
			component: $('.component', this).val(),
			sentence: $('.sentence', this).val(),
			comment: $('textarea.comment', this).val()
		};
		// console.log(comment);
		App.Utils.postJSON(App.API + 'comments', comment);
		comment.user.md5 = md5(comment.user.email);
		App.panel.addComment(comment);
		App.panel.countComments();
	});
});


App.panel = {
	templateComment: $('#tpl-comment').html(),
	retract: function(){
		$('.ctrl-panel').addClass('hidden');
		App.panel.clear();
	},
	clear: function(){
		$('.header', '.ctrl-panel-bottom').html('');
		$('.comments-container').html('');
	},
	addComment: function(comment){
		if (comment.time) {
			comment.timeago = moment.unix(comment.time.sec).fromNow();
		}
		else {
			comment.timeago = "a few seconds ago";
		}
		var output = Mustache.render(App.panel.templateComment, comment);
		$('.comments-container').prepend(output);
	},
	countComments: function(){
		var header;
		var count = $('.comment', '.comments-container').length;
		if (count < 2) {
			header = count + ' comment';
		}
		else {
			header = count + ' comments';
		}
		$('.header', '.ctrl-panel-bottom').text(header);
	},
	open: function(data){
		App.panel.clear();
		console.log(data.sentence);
		
		$('.excerpt', '.ctrl-panel').text(data.excerpt);
		$('.component', '.ctrl-panel').val(data.component);
		$('.sentence', '.ctrl-panel').val(data.sentence);
		$('.ctrl-panel').removeClass('hidden');
		
		$.get(App.API + 'sentence', {component: data.component, sentence: data.sentence}, function(comments){
			comments.forEach(function(comment){
				App.panel.addComment(comment);
			});
			App.panel.countComments();
		});
	}
};


App.bar = {
	addBubble: function(top, i, data){
		var bubble = $('<div class="bubble"></div>').text(i).css('top', top + 30);
		bubble.click(function(){
			App.panel.open(data);
		});
		bubble.appendTo('.ctrl-bar');
	}
};


Monocle.locus = {};

App.reader.listen('monocle:pagechange', function(evt) {
	$('.ctrl-bar').empty();
	
	if (Monocle.locus.componentId && evt.m.locus.componentId === Monocle.locus.componentId && evt.m.locus.page === Monocle.locus.page - 1) {
		var pageOffset = evt.m.page.m.dimensions.locusToOffset({page: evt.m.pageNumber - 1});
	}
	else {
		var pageOffset = evt.m.page.m.dimensions.locusToOffset({page: evt.m.pageNumber});
	}
	
	var iframe = evt.m.page.m.activeFrame;
	// @see http://stackoverflow.com/a/11107977/593036
	var doc = iframe.contentDocument;
	
	var t = -1;
	$(doc).find('.sentence').each(function(i){
		var position = $(this).position();
		if (position.left === pageOffset) {
			// Prevent collisions:
			if (position.top >= t) {
				t = position.top;
				if (App.componentmap[$(this).attr('data-id')]) {
					var data = {
						excerpt: $(this).text(),
						component: evt.m.locus.componentId,
						sentence: $(this).attr('data-id')
					};
					App.bar.addBubble(position.top, App.componentmap[$(this).attr('data-id')], data);
				}
			}
		}
	});
	
	Monocle.locus = evt.m.locus;
	
});



