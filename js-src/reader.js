var App = App || {};

App.API = (window.location.hostname === 'localhost') ? 'http://localhost/AnnotatePG-api/' : 'http://api.annotatepg.com/';


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




var bookData = Monocle.bookData({
	components: ["file_airbnb.html","file_control.html","file_tablets.html","file_founders.html","file_superangels.html","file_seesv.html","file_hiresfund.html","file_yahoo.html","file_future.html","file_addiction.html","file_top.html","file_selfindulgence.html","file_organic.html","file_apple.html","file_really.html","file_discover.html","file_publishing.html","file_nthings.html","file_determination.html","file_kate.html","file_segway.html","file_ramenprofitable.html","file_makersschedule.html","file_revolution.html","file_foundervisa.html","file_5founders.html","file_relres.html","file_angelinvesting.html","file_convergence.html","file_maybe.html","file_hackernews.html","file_13sentences.html","file_identity.html","file_credentials.html","file_divergence.html","file_highres.html","file_artistsship.html","file_badeconomy.html","file_fundraising.html","file_prcmc.html","file_cities.html","file_distraction.html","file_lies.html","file_good.html","file_googles.html","file_heroes.html","file_disagree.html","file_boss.html","file_ycombinator.html","file_trolls.html","file_newthings.html","file_startuphubs.html","file_webstartups.html","file_philosophy.html","file_colleges.html","file_die.html","file_head.html","file_stuff.html","file_equity.html","file_unions.html","file_guidetoinvestors.html","file_judgement.html","file_microsoft.html","file_notnot.html","file_wisdom.html","file_foundersatwork.html","file_goodart.html","file_startupmistakes.html","file_mit.html","file_investors.html","file_copy.html","file_island.html","file_marginal.html","file_america.html","file_siliconvalley.html","file_startuplessons.html","file_randomness.html","file_softwarepatents.html","file_6631327.html","file_whyyc.html","file_love.html","file_procrastination.html","file_web20.html","file_startupfunding.html","file_vcsqueeze.html","file_ideas.html","file_sfp.html","file_inequality.html","file_ladder.html","file_opensource.html","file_hiring.html","file_submarine.html","file_bronze.html","file_mac.html","file_writing44.html","file_college.html","file_venturecapital.html","file_start.html","file_hs.html","file_usa.html","file_charisma.html","file_polls.html","file_laundry.html","file_bubble.html","file_essay.html","file_pypar.html","file_gh.html","file_gap.html","file_wealth.html","file_gba.html","file_say.html","file_ffb.html","file_hp.html","file_iflisp.html","file_hundred.html","file_nerds.html","file_better.html","file_desres.html","file_spam.html","file_icad.html","file_power.html","file_fix.html","file_taste.html","file_noop.html","file_diff.html","file_road.html","file_rootsoflisp.html","file_langdes.html","file_popular.html","file_javacover.html","file_avg.html","file_lwba.html","file_progbot.html"], 
	chapters: [{"src": "file_airbnb.html", "title": "Subject: Airbnb"}, {"src": "file_control.html", "title": "Founder Control"}, {"src": "file_tablets.html", "title": "Tablets"}, {"src": "file_founders.html", "title": "What We Look for in Founders"}, {"src": "file_superangels.html", "title": "The New Funding Landscape"}, {"src": "file_seesv.html", "title": "Where to See Silicon Valley"}, {"src": "file_hiresfund.html", "title": "High Resolution Fundraising "}, {"src": "file_yahoo.html", "title": "What Happened to Yahoo "}, {"src": "file_future.html", "title": "The Future of Startup Funding "}, {"src": "file_addiction.html", "title": "The Acceleration of Addictiveness"}, {"src": "file_top.html", "title": "The Top Idea in Your Mind "}, {"src": "file_selfindulgence.html", "title": "How to Lose Time and Money "}, {"src": "file_organic.html", "title": "Organic Startup Ideas"}, {"src": "file_apple.html", "title": "Apple's Mistake"}, {"src": "file_really.html", "title": "What Startups Are Really Like"}, {"src": "file_discover.html", "title": "Persuade xor Discover "}, {"src": "file_publishing.html", "title": "Post-Medium Publishing"}, {"src": "file_nthings.html", "title": "The List of N Things"}, {"src": "file_determination.html", "title": "The Anatomy of Determination "}, {"src": "file_kate.html", "title": "What Kate Saw in Silicon Valley  "}, {"src": "file_segway.html", "title": "The Trouble with the Segway"}, {"src": "file_ramenprofitable.html", "title": "Ramen Profitable"}, {"src": "file_makersschedule.html", "title": "Maker's Schedule, Manager's Schedule "}, {"src": "file_revolution.html", "title": "A Local Revolution?"}, {"src": "file_foundervisa.html", "title": "The Founder Visa"}, {"src": "file_5founders.html", "title": "Five Founders"}, {"src": "file_relres.html", "title": "Relentlessly Resourceful"}, {"src": "file_angelinvesting.html", "title": "How to Be an Angel Investor"}, {"src": "file_convergence.html", "title": "Why TV Lost"}, {"src": "file_maybe.html", "title": "Can You Buy a Silicon Valley?  Maybe."}, {"src": "file_hackernews.html", "title": "What I've Learned from Hacker News"}, {"src": "file_13sentences.html", "title": "Startups in 13 Sentences"}, {"src": "file_identity.html", "title": "Keep Your Identity Small  "}, {"src": "file_credentials.html", "title": "After Credentials"}, {"src": "file_divergence.html", "title": "Could VC be a Casualty of the Recession?"}, {"src": "file_highres.html", "title": "The High-Res Society"}, {"src": "file_artistsship.html", "title": "The Other Half of \"Artists Ship\"  "}, {"src": "file_badeconomy.html", "title": "Why to Start a Startup in a Bad Economy"}, {"src": "file_fundraising.html", "title": "A Fundraising Survival Guide"}, {"src": "file_prcmc.html", "title": "The Pooled-Risk Company Management Company"}, {"src": "file_cities.html", "title": "Cities and Ambition"}, {"src": "file_distraction.html", "title": "Disconnecting Distraction"}, {"src": "file_lies.html", "title": "Lies We Tell Kids"}, {"src": "file_good.html", "title": "Be Good"}, {"src": "file_googles.html", "title": "Why There Aren't More Googles"}, {"src": "file_heroes.html", "title": "Some Heroes"}, {"src": "file_disagree.html", "title": "How to Disagree"}, {"src": "file_boss.html", "title": "You Weren't Meant to Have a Boss"}, {"src": "file_ycombinator.html", "title": "A New Venture Animal"}, {"src": "file_trolls.html", "title": "Trolls"}, {"src": "file_newthings.html", "title": "Six Principles for Making New Things"}, {"src": "file_startuphubs.html", "title": "Why to Move to a Startup Hub"}, {"src": "file_webstartups.html", "title": "The Future of Web Startups"}, {"src": "file_philosophy.html", "title": "How to Do Philosophy"}, {"src": "file_colleges.html", "title": "News from the Front"}, {"src": "file_die.html", "title": "How Not to Die"}, {"src": "file_head.html", "title": "Holding a Program in One's Head"}, {"src": "file_stuff.html", "title": "Stuff"}, {"src": "file_equity.html", "title": "The Equity Equation"}, {"src": "file_unions.html", "title": "An Alternative Theory of Unions"}, {"src": "file_guidetoinvestors.html", "title": "The Hacker's Guide to Investors"}, {"src": "file_judgement.html", "title": "Two Kinds of Judgement"}, {"src": "file_microsoft.html", "title": "Microsoft is Dead"}, {"src": "file_notnot.html", "title": "Why to Not Not Start a Startup"}, {"src": "file_wisdom.html", "title": "Is It Worth Being Wise?"}, {"src": "file_foundersatwork.html", "title": "Learning from Founders"}, {"src": "file_goodart.html", "title": "How Art Can Be Good"}, {"src": "file_startupmistakes.html", "title": "The 18 Mistakes That Kill Startups"}, {"src": "file_mit.html", "title": "A Student's Guide to Startups"}, {"src": "file_investors.html", "title": "How to Present to Investors"}, {"src": "file_copy.html", "title": "Copy What You Like"}, {"src": "file_island.html", "title": "The Island Test"}, {"src": "file_marginal.html", "title": "The Power of the Marginal"}, {"src": "file_america.html", "title": "Why Startups Condense in America"}, {"src": "file_siliconvalley.html", "title": "How to Be Silicon Valley"}, {"src": "file_startuplessons.html", "title": "The Hardest Lessons for Startups to Learn"}, {"src": "file_randomness.html", "title": "See Randomness"}, {"src": "file_softwarepatents.html", "title": "Are Software Patents Evil?"}, {"src": "file_6631327.html", "title": "6,631,372"}, {"src": "file_whyyc.html", "title": "Why YC"}, {"src": "file_love.html", "title": "How to Do What You Love"}, {"src": "file_procrastination.html", "title": "Good and Bad Procrastination"}, {"src": "file_web20.html", "title": "Web 2.0"}, {"src": "file_startupfunding.html", "title": "How to Fund a Startup"}, {"src": "file_vcsqueeze.html", "title": "The Venture Capital Squeeze"}, {"src": "file_ideas.html", "title": "Ideas for Startups"}, {"src": "file_sfp.html", "title": "What I Did this Summer"}, {"src": "file_inequality.html", "title": "Inequality and Risk"}, {"src": "file_ladder.html", "title": "After the Ladder"}, {"src": "file_opensource.html", "title": "What Business Can Learn from Open Source"}, {"src": "file_hiring.html", "title": "Hiring is Obsolete"}, {"src": "file_submarine.html", "title": "The Submarine"}, {"src": "file_bronze.html", "title": "Why Smart People Have Bad Ideas"}, {"src": "file_mac.html", "title": "Return of the Mac"}, {"src": "file_writing44.html", "title": "Writing,  Briefly"}, {"src": "file_college.html", "title": "Undergraduation"}, {"src": "file_venturecapital.html", "title": "A Unified Theory of VC Suckage"}, {"src": "file_start.html", "title": "How to Start a Startup"}, {"src": "file_hs.html", "title": "What You'll Wish You'd Known"}, {"src": "file_usa.html", "title": "Made in USA"}, {"src": "file_charisma.html", "title": "It's Charisma, Stupid"}, {"src": "file_polls.html", "title": "Bradley's Ghost"}, {"src": "file_laundry.html", "title": "A Version 1.0"}, {"src": "file_bubble.html", "title": "What the Bubble Got Right"}, {"src": "file_essay.html", "title": "The Age of the Essay"}, {"src": "file_pypar.html", "title": "The Python Paradox"}, {"src": "file_gh.html", "title": "Great Hackers"}, {"src": "file_gap.html", "title": "Mind the Gap"}, {"src": "file_wealth.html", "title": "How to Make Wealth"}, {"src": "file_gba.html", "title": "The Word \"Hacker\""}, {"src": "file_say.html", "title": "What You Can't Say"}, {"src": "file_ffb.html", "title": "Filters that Fight Back"}, {"src": "file_hp.html", "title": "Hackers and Painters"}, {"src": "file_iflisp.html", "title": "If Lisp is So Great"}, {"src": "file_hundred.html", "title": "The Hundred-Year Language"}, {"src": "file_nerds.html", "title": "Why Nerds are Unpopular"}, {"src": "file_better.html", "title": "Better Bayesian Filtering"}, {"src": "file_desres.html", "title": "Design and Research"}, {"src": "file_spam.html", "title": "A Plan for Spam"}, {"src": "file_icad.html", "title": "Revenge of the Nerds"}, {"src": "file_power.html", "title": "Succinctness is Power"}, {"src": "file_fix.html", "title": "What Languages Fix"}, {"src": "file_taste.html", "title": "Taste for Makers"}, {"src": "file_noop.html", "title": "Why Arc Isn't Especially Object-Oriented"}, {"src": "file_diff.html", "title": "What Made Lisp Different"}, {"src": "file_road.html", "title": "The Other Road Ahead"}, {"src": "file_rootsoflisp.html", "title": "The Roots of Lisp"}, {"src": "file_langdes.html", "title": "Five Questions about Language Design"}, {"src": "file_popular.html", "title": "Being Popular"}, {"src": "file_javacover.html", "title": "Java's Cover"}, {"src": "file_avg.html", "title": "Beating the Averages"}, {"src": "file_lwba.html", "title": "Lisp for Web-Based Applications"}, {"src": "file_progbot.html", "title": "Programming Bottom-Up"} ],
	metadata: {title: "Essays by Paul Graham", creator: "Paul Graham"},
	getComponent: function(id) {
		return { url: 'epub/51542bf998dee42e4b000000-c28e5ede73bcd1eb82c67b31434d7956/' + id };
	}
});


App.reader = Monocle.Reader(
	'reader', 
	bookData, 
	{
		panels: Monocle.Panels.Marginal,
		stylesheet: 
			'body { font-family: Domine; line-height: 28px; color: #222; padding-top: 20px; } ' +
			'.s {cursor: pointer;} .s:hover {background-color: #FFF4A2;} ' +
			'.highlight { background-color: #FFF4A2; } ',
		flipper: Monocle.Flippers.Scroller
	},
	function(reader){
		Monocle.toc = Monocle.Controls.Contents(reader);
		reader.addControl(Monocle.toc, 'popover', {hidden: true});
		
		// @see https://github.com/joseph/Monocle/pull/173
		Monocle.scrubber = new Monocle.Controls.Scrubber(reader);
		reader.addControl(Monocle.scrubber, 'standard', {container: 'scrubber'});
		
		
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

Monocle.Events.listen('reader', 'monocle:pagechange', function (evt) {
	var place = App.reader.getPlace(evt.m.page);
	if (place) {
		$('.chapter-title').text(place.chapterTitle());
	}
});

// Ranges and Sentences:


App.componentmap = {};

Monocle.Events.listen('reader', 'monocle:componentmodify', function(evt){
	var component = evt.m.component.properties.id;
	
	$.get(App.API + 'component', {component: component}, function(sentences){
		App.componentmap = sentences;
		
		$.each(sentences, function(sentence, count){
			$(evt.m.document.body).find('.sentence[data-id="' + sentence + '"]').each(function(){
				$(this).addClass('highlight');
			});
		});
	});
});

['monocle:pagechange', 'monocle:boundarystart', 'monocle:boundaryend'].forEach(function(evtName){
	Monocle.Events.listen('reader', evtName, function(evt){
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



Monocle.Events.listen('reader', 'monocle:pagechange', function(evt) {
	$('.ctrl-bar').empty();
	
	var pageOffset     = evt.m.page.m.dimensions.locusToOffset({page: evt.m.pageNumber});
	var nextPageOffset = evt.m.page.m.dimensions.locusToOffset({page: evt.m.pageNumber + 1});
	
	var iframe = evt.m.page.m.activeFrame;
	// @see http://stackoverflow.com/a/11107977/593036
	var doc = iframe.contentDocument;
	
	var t = -1;
	$(doc).find('span.s').each(function(i){
		var position = $(this).position();
		if (position.left >= pageOffset && position.left < nextPageOffset) {
			console.log(this);
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
	
});


