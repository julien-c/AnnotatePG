var App = App || {};

App.API = (window.location.hostname === 'www.annotatepg.dev') ? 'http://api.annotatepg.dev/' : 'http://api.annotatepg.com/';

var bookData = Monocle.bookData({
	components: ["0 - How to Get Startup Ideas.html", "1 - The Hardware Renaissance.html", "2 - Startup = Growth.html", "3 - Black Swan Farming.html", "4 - The Top of My Todo List.html", "5 - Writing and Speaking.html", "6 - Defining Property.html", "7 - Frighteningly Ambitious Startup Ideas.html", "8 - A Word to the Resourceful.html", "9 - Schlep Blindness.html", "10 - Snapshot Viaweb, June 1998.html", "11 - Why Startup Hubs Work.html", "12 - The Patent Pledge.html", "13 - Subject Airbnb.html", "14 - Founder Control.html", "15 - Tablets.html", "16 - What We Look for in Founders.html", "17 - The New Funding Landscape.html", "18 - Where to See Silicon Valley.html", "19 - High Resolution Fundraising.html", "20 - What Happened to Yahoo.html", "21 - The Future of Startup Funding.html", "22 - The Acceleration of Addictiveness.html", "23 - The Top Idea in Your Mind.html", "24 - How to Lose Time and Money.html", "25 - Organic Startup Ideas.html", "26 - Apple\'s Mistake.html", "27 - What Startups Are Really Like.html", "28 - Persuade xor Discover.html", "29 - Post-Medium Publishing.html", "30 - The List of N Things.html", "31 - The Anatomy of Determination.html", "32 - What Kate Saw in Silicon Valley.html", "33 - The Trouble with the Segway.html", "34 - Ramen Profitable.html", "35 - Maker\'s Schedule, Manager\'s Schedule.html", "36 - A Local Revolution.html", "37 - The Founder Visa.html", "38 - Five Founders.html", "39 - Relentlessly Resourceful.html", "40 - How to Be an Angel Investor.html", "41 - Why TV Lost.html", "42 - Can You Buy a Silicon Valley  Maybe..html", "43 - What I\'ve Learned from Hacker News.html", "44 - Startups in 13 Sentences.html", "45 - Keep Your Identity Small.html", "46 - After Credentials.html", "47 - Could VC be a Casualty of the Recession.html", "48 - The High-Res Society.html", "49 - The Other Half of \"Artists Ship\".html", "50 - Why to Start a Startup in a Bad Economy.html", "51 - A Fundraising Survival Guide.html", "52 - The Pooled-Risk Company Management Company.html", "53 - Cities and Ambition.html", "54 - Disconnecting Distraction.html", "55 - Lies We Tell Kids.html", "56 - Be Good.html", "57 - Why There Aren\'t More Googles.html", "58 - Some Heroes.html", "59 - How to Disagree.html", "60 - You Weren\'t Meant to Have a Boss.html", "61 - A New Venture Animal.html", "62 - Trolls.html", "63 - Six Principles for Making New Things.html", "64 - Why to Move to a Startup Hub.html", "65 - The Future of Web Startups.html", "66 - How to Do Philosophy.html", "67 - News from the Front.html", "68 - How Not to Die.html", "69 - Holding a Program in One\'s Head.html", "70 - Stuff.html", "71 - The Equity Equation.html", "72 - An Alternative Theory of Unions.html", "73 - The Hacker\'s Guide to Investors.html", "74 - Two Kinds of Judgement.html", "75 - Microsoft is Dead.html", "76 - Why to Not Not Start a Startup.html", "77 - Is It Worth Being Wise.html", "78 - Learning from Founders.html", "79 - How Art Can Be Good.html", "80 - The 18 Mistakes That Kill Startups.html", "81 - A Student\'s Guide to Startups.html", "82 - How to Present to Investors.html", "83 - Copy What You Like.html", "84 - The Island Test.html", "85 - The Power of the Marginal.html", "86 - Why Startups Condense in America.html", "87 - How to Be Silicon Valley.html", "88 - The Hardest Lessons for Startups to Learn.html", "89 - See Randomness.html", "90 - Are Software Patents Evil.html", "91 - 6,631,372.html", "92 - Why YC.html", "93 - How to Do What You Love.html", "94 - Good and Bad Procrastination.html", "95 - Web 2.0.html", "96 - How to Fund a Startup.html", "97 - The Venture Capital Squeeze.html", "98 - Ideas for Startups.html", "99 - What I Did this Summer.html", "100 - Inequality and Risk.html", "101 - After the Ladder.html", "102 - What Business Can Learn from Open Source.html", "103 - Hiring is Obsolete.html", "104 - The Submarine.html", "105 - Why Smart People Have Bad Ideas.html", "106 - Return of the Mac.html", "107 - Writing,  Briefly.html", "108 - Undergraduation.html", "109 - A Unified Theory of VC Suckage.html", "110 - How to Start a Startup.html", "111 - What You\'ll Wish You\'d Known.html", "112 - Made in USA.html", "113 - It\'s Charisma, Stupid.html", "114 - Bradley\'s Ghost.html", "115 - A Version 1.0.html", "116 - What the Bubble Got Right.html", "117 - The Age of the Essay.html", "118 - The Python Paradox.html", "119 - Great Hackers.html", "120 - Mind the Gap.html", "121 - How to Make Wealth.html", "122 - The Word \"Hacker\".html", "123 - What You Can\'t Say.html", "124 - Filters that Fight Back.html", "125 - Hackers and Painters.html", "126 - If Lisp is So Great.html", "127 - The Hundred-Year Language.html", "128 - Why Nerds are Unpopular.html", "129 - Better Bayesian Filtering.html", "130 - Design and Research.html", "131 - A Plan for Spam.html", "132 - Revenge of the Nerds.html", "133 - Succinctness is Power.html", "134 - What Languages Fix.html", "135 - Taste for Makers.html", "136 - Why Arc Isn\'t Especially Object-Oriented.html", "137 - What Made Lisp Different.html", "138 - The Other Road Ahead.html", "139 - The Roots of Lisp.html", "140 - Five Questions about Language Design.html", "141 - Being Popular.html", "142 - Java\'s Cover.html", "143 - Beating the Averages.html", "144 - Lisp for Web-Based Applications.html", "147 - Programming Bottom-Up.html"],
	chapters: [{"title": "How to Get Startup Ideas", "src": "0 - How to Get Startup Ideas.html"}, {"title": "The Hardware Renaissance", "src": "1 - The Hardware Renaissance.html"}, {"title": "Startup = Growth", "src": "2 - Startup = Growth.html"}, {"title": "Black Swan Farming", "src": "3 - Black Swan Farming.html"}, {"title": "The Top of My Todo List", "src": "4 - The Top of My Todo List.html"}, {"title": "Writing and Speaking", "src": "5 - Writing and Speaking.html"}, {"title": "Defining Property", "src": "6 - Defining Property.html"}, {"title": "Frighteningly Ambitious Startup Ideas", "src": "7 - Frighteningly Ambitious Startup Ideas.html"}, {"title": "A Word to the Resourceful", "src": "8 - A Word to the Resourceful.html"}, {"title": "Schlep Blindness", "src": "9 - Schlep Blindness.html"}, {"title": "Snapshot: Viaweb, June 1998", "src": "10 - Snapshot Viaweb, June 1998.html"}, {"title": "Why Startup Hubs Work", "src": "11 - Why Startup Hubs Work.html"}, {"title": "The Patent Pledge", "src": "12 - The Patent Pledge.html"}, {"title": "Subject: Airbnb", "src": "13 - Subject Airbnb.html"}, {"title": "Founder Control", "src": "14 - Founder Control.html"}, {"title": "Tablets", "src": "15 - Tablets.html"}, {"title": "What We Look for in Founders", "src": "16 - What We Look for in Founders.html"}, {"title": "The New Funding Landscape", "src": "17 - The New Funding Landscape.html"}, {"title": "Where to See Silicon Valley", "src": "18 - Where to See Silicon Valley.html"}, {"title": "High Resolution Fundraising", "src": "19 - High Resolution Fundraising.html"}, {"title": "What Happened to Yahoo", "src": "20 - What Happened to Yahoo.html"}, {"title": "The Future of Startup Funding", "src": "21 - The Future of Startup Funding.html"}, {"title": "The Acceleration of Addictiveness", "src": "22 - The Acceleration of Addictiveness.html"}, {"title": "The Top Idea in Your Mind", "src": "23 - The Top Idea in Your Mind.html"}, {"title": "How to Lose Time and Money", "src": "24 - How to Lose Time and Money.html"}, {"title": "Organic Startup Ideas", "src": "25 - Organic Startup Ideas.html"}, {"title": "Apple\'s Mistake", "src": "26 - Apple\'s Mistake.html"}, {"title": "What Startups Are Really Like", "src": "27 - What Startups Are Really Like.html"}, {"title": "Persuade xor Discover", "src": "28 - Persuade xor Discover.html"}, {"title": "Post-Medium Publishing", "src": "29 - Post-Medium Publishing.html"}, {"title": "The List of N Things", "src": "30 - The List of N Things.html"}, {"title": "The Anatomy of Determination", "src": "31 - The Anatomy of Determination.html"}, {"title": "What Kate Saw in Silicon Valley", "src": "32 - What Kate Saw in Silicon Valley.html"}, {"title": "The Trouble with the Segway", "src": "33 - The Trouble with the Segway.html"}, {"title": "Ramen Profitable", "src": "34 - Ramen Profitable.html"}, {"title": "Maker\'s Schedule, Manager\'s Schedule", "src": "35 - Maker\'s Schedule, Manager\'s Schedule.html"}, {"title": "A Local Revolution?", "src": "36 - A Local Revolution.html"}, {"title": "The Founder Visa", "src": "37 - The Founder Visa.html"}, {"title": "Five Founders", "src": "38 - Five Founders.html"}, {"title": "Relentlessly Resourceful", "src": "39 - Relentlessly Resourceful.html"}, {"title": "How to Be an Angel Investor", "src": "40 - How to Be an Angel Investor.html"}, {"title": "Why TV Lost", "src": "41 - Why TV Lost.html"}, {"title": "Can You Buy a Silicon Valley?  Maybe.", "src": "42 - Can You Buy a Silicon Valley  Maybe..html"}, {"title": "What I\'ve Learned from Hacker News", "src": "43 - What I\'ve Learned from Hacker News.html"}, {"title": "Startups in 13 Sentences", "src": "44 - Startups in 13 Sentences.html"}, {"title": "Keep Your Identity Small", "src": "45 - Keep Your Identity Small.html"}, {"title": "After Credentials", "src": "46 - After Credentials.html"}, {"title": "Could VC be a Casualty of the Recession?", "src": "47 - Could VC be a Casualty of the Recession.html"}, {"title": "The High-Res Society", "src": "48 - The High-Res Society.html"}, {"title": "The Other Half of \"Artists Ship\"", "src": "49 - The Other Half of \"Artists Ship\".html"}, {"title": "Why to Start a Startup in a Bad Economy", "src": "50 - Why to Start a Startup in a Bad Economy.html"}, {"title": "A Fundraising Survival Guide", "src": "51 - A Fundraising Survival Guide.html"}, {"title": "The Pooled-Risk Company Management Company", "src": "52 - The Pooled-Risk Company Management Company.html"}, {"title": "Cities and Ambition", "src": "53 - Cities and Ambition.html"}, {"title": "Disconnecting Distraction", "src": "54 - Disconnecting Distraction.html"}, {"title": "Lies We Tell Kids", "src": "55 - Lies We Tell Kids.html"}, {"title": "Be Good", "src": "56 - Be Good.html"}, {"title": "Why There Aren\'t More Googles", "src": "57 - Why There Aren\'t More Googles.html"}, {"title": "Some Heroes", "src": "58 - Some Heroes.html"}, {"title": "How to Disagree", "src": "59 - How to Disagree.html"}, {"title": "You Weren\'t Meant to Have a Boss", "src": "60 - You Weren\'t Meant to Have a Boss.html"}, {"title": "A New Venture Animal", "src": "61 - A New Venture Animal.html"}, {"title": "Trolls", "src": "62 - Trolls.html"}, {"title": "Six Principles for Making New Things", "src": "63 - Six Principles for Making New Things.html"}, {"title": "Why to Move to a Startup Hub", "src": "64 - Why to Move to a Startup Hub.html"}, {"title": "The Future of Web Startups", "src": "65 - The Future of Web Startups.html"}, {"title": "How to Do Philosophy", "src": "66 - How to Do Philosophy.html"}, {"title": "News from the Front", "src": "67 - News from the Front.html"}, {"title": "How Not to Die", "src": "68 - How Not to Die.html"}, {"title": "Holding a Program in One\'s Head", "src": "69 - Holding a Program in One\'s Head.html"}, {"title": "Stuff", "src": "70 - Stuff.html"}, {"title": "The Equity Equation", "src": "71 - The Equity Equation.html"}, {"title": "An Alternative Theory of Unions", "src": "72 - An Alternative Theory of Unions.html"}, {"title": "The Hacker\'s Guide to Investors", "src": "73 - The Hacker\'s Guide to Investors.html"}, {"title": "Two Kinds of Judgement", "src": "74 - Two Kinds of Judgement.html"}, {"title": "Microsoft is Dead", "src": "75 - Microsoft is Dead.html"}, {"title": "Why to Not Not Start a Startup", "src": "76 - Why to Not Not Start a Startup.html"}, {"title": "Is It Worth Being Wise?", "src": "77 - Is It Worth Being Wise.html"}, {"title": "Learning from Founders", "src": "78 - Learning from Founders.html"}, {"title": "How Art Can Be Good", "src": "79 - How Art Can Be Good.html"}, {"title": "The 18 Mistakes That Kill Startups", "src": "80 - The 18 Mistakes That Kill Startups.html"}, {"title": "A Student\'s Guide to Startups", "src": "81 - A Student\'s Guide to Startups.html"}, {"title": "How to Present to Investors", "src": "82 - How to Present to Investors.html"}, {"title": "Copy What You Like", "src": "83 - Copy What You Like.html"}, {"title": "The Island Test", "src": "84 - The Island Test.html"}, {"title": "The Power of the Marginal", "src": "85 - The Power of the Marginal.html"}, {"title": "Why Startups Condense in America", "src": "86 - Why Startups Condense in America.html"}, {"title": "How to Be Silicon Valley", "src": "87 - How to Be Silicon Valley.html"}, {"title": "The Hardest Lessons for Startups to Learn", "src": "88 - The Hardest Lessons for Startups to Learn.html"}, {"title": "See Randomness", "src": "89 - See Randomness.html"}, {"title": "Are Software Patents Evil?", "src": "90 - Are Software Patents Evil.html"}, {"title": "6,631,372", "src": "91 - 6,631,372.html"}, {"title": "Why YC", "src": "92 - Why YC.html"}, {"title": "How to Do What You Love", "src": "93 - How to Do What You Love.html"}, {"title": "Good and Bad Procrastination", "src": "94 - Good and Bad Procrastination.html"}, {"title": "Web 2.0", "src": "95 - Web 2.0.html"}, {"title": "How to Fund a Startup", "src": "96 - How to Fund a Startup.html"}, {"title": "The Venture Capital Squeeze", "src": "97 - The Venture Capital Squeeze.html"}, {"title": "Ideas for Startups", "src": "98 - Ideas for Startups.html"}, {"title": "What I Did this Summer", "src": "99 - What I Did this Summer.html"}, {"title": "Inequality and Risk", "src": "100 - Inequality and Risk.html"}, {"title": "After the Ladder", "src": "101 - After the Ladder.html"}, {"title": "What Business Can Learn from Open Source", "src": "102 - What Business Can Learn from Open Source.html"}, {"title": "Hiring is Obsolete", "src": "103 - Hiring is Obsolete.html"}, {"title": "The Submarine", "src": "104 - The Submarine.html"}, {"title": "Why Smart People Have Bad Ideas", "src": "105 - Why Smart People Have Bad Ideas.html"}, {"title": "Return of the Mac", "src": "106 - Return of the Mac.html"}, {"title": "Writing,  Briefly", "src": "107 - Writing,  Briefly.html"}, {"title": "Undergraduation", "src": "108 - Undergraduation.html"}, {"title": "A Unified Theory of VC Suckage", "src": "109 - A Unified Theory of VC Suckage.html"}, {"title": "How to Start a Startup", "src": "110 - How to Start a Startup.html"}, {"title": "What You\'ll Wish You\'d Known", "src": "111 - What You\'ll Wish You\'d Known.html"}, {"title": "Made in USA", "src": "112 - Made in USA.html"}, {"title": "It\'s Charisma, Stupid", "src": "113 - It\'s Charisma, Stupid.html"}, {"title": "Bradley\'s Ghost", "src": "114 - Bradley\'s Ghost.html"}, {"title": "A Version 1.0", "src": "115 - A Version 1.0.html"}, {"title": "What the Bubble Got Right", "src": "116 - What the Bubble Got Right.html"}, {"title": "The Age of the Essay", "src": "117 - The Age of the Essay.html"}, {"title": "The Python Paradox", "src": "118 - The Python Paradox.html"}, {"title": "Great Hackers", "src": "119 - Great Hackers.html"}, {"title": "Mind the Gap", "src": "120 - Mind the Gap.html"}, {"title": "How to Make Wealth", "src": "121 - How to Make Wealth.html"}, {"title": "The Word \"Hacker\"", "src": "122 - The Word \"Hacker\".html"}, {"title": "What You Can\'t Say", "src": "123 - What You Can\'t Say.html"}, {"title": "Filters that Fight Back", "src": "124 - Filters that Fight Back.html"}, {"title": "Hackers and Painters", "src": "125 - Hackers and Painters.html"}, {"title": "If Lisp is So Great", "src": "126 - If Lisp is So Great.html"}, {"title": "The Hundred-Year Language", "src": "127 - The Hundred-Year Language.html"}, {"title": "Why Nerds are Unpopular", "src": "128 - Why Nerds are Unpopular.html"}, {"title": "Better Bayesian Filtering", "src": "129 - Better Bayesian Filtering.html"}, {"title": "Design and Research", "src": "130 - Design and Research.html"}, {"title": "A Plan for Spam", "src": "131 - A Plan for Spam.html"}, {"title": "Revenge of the Nerds", "src": "132 - Revenge of the Nerds.html"}, {"title": "Succinctness is Power", "src": "133 - Succinctness is Power.html"}, {"title": "What Languages Fix", "src": "134 - What Languages Fix.html"}, {"title": "Taste for Makers", "src": "135 - Taste for Makers.html"}, {"title": "Why Arc Isn\'t Especially Object-Oriented", "src": "136 - Why Arc Isn\'t Especially Object-Oriented.html"}, {"title": "What Made Lisp Different", "src": "137 - What Made Lisp Different.html"}, {"title": "The Other Road Ahead", "src": "138 - The Other Road Ahead.html"}, {"title": "The Roots of Lisp", "src": "139 - The Roots of Lisp.html"}, {"title": "Five Questions about Language Design", "src": "140 - Five Questions about Language Design.html"}, {"title": "Being Popular", "src": "141 - Being Popular.html"}, {"title": "Java\'s Cover", "src": "142 - Java\'s Cover.html"}, {"title": "Beating the Averages", "src": "143 - Beating the Averages.html"}, {"title": "Lisp for Web-Based Applications", "src": "144 - Lisp for Web-Based Applications.html"}, {"title": "Programming Bottom-Up", "src": "147 - Programming Bottom-Up.html"}],
	metadata: {title: "Essays by Paul Graham", creator: "Paul Graham"},
	getComponent: function(id) {
		return { url: 'epub/515bf9f5500f8d1e52000000-6532ed112c7448cc98ca4e6bb96ad9e1/' + id };
	}
});

App.aboutUs = document.getElementById('about-us').innerHTML;

// Move the reader to the requested page
$.cookie.defaults.expire = 365;
var startLocus = null;
var openPanel = null;
if (window.location.hash) {
	var loc = window.location.hash.substring(1).split(':');
	startLocus = {componentId: loc[0], selector: 'span.s' + loc[1]};
	openPanel = {component: loc[0], sentence: loc[1]};
}
else if ($.cookie('current_component')) {
	startLocus = {
		componentId: $.cookie('current_component'), 
		selector: 'span.' + $.cookie('current_sentence')
	};
}

App.reader = Monocle.Reader(
	'reader', 
	bookData, 
	{
		panels: Monocle.Panels.Marginal,
		stylesheet: 
			'body { font-family: Domine; line-height: 28px; color: #222; padding-top: 20px; } ' +
			'.s {cursor: pointer;} .s:hover {background-color: #FFF4A2;} ' +
			'.highlight { background-color: #FFF4A2; } ',
		flipper: Monocle.Flippers.Scroller,
		place: startLocus
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
		
		Monocle.scrubber.updateNeedles();
		
		Monocle.overlay = Monocle.Controls.CustomOverlay(reader, App.aboutUs);
		reader.addControl(Monocle.overlay, 'popover', {hidden: true});
	}
);


$(document).ready(function(){
	// Check if the user is signed in
	$.ajax({
		url: App.API + 'me',
		dataType: 'json',
		success: function(data){
			if(data.status && data.status === "guest") {
				$('.sign-in').click(function(){
					window.location = App.API + 'user/signin';
				});
				$('.sign-in').show();
				return;
			}
			else {
				$('.log-out').click(function(){
					window.location = App.API + 'user/logout';
				});
				$('.log-out').show();
				App.user = data;
				$('img.avatar', '#comment-fields').attr('src', App.user.profile_image_url);
				$('#comment-fields').show();
			}
		},
		xhrFields: {
			withCredentials: true
		},
	});
	
	$('.toc-handle').click(function(){
		if (Monocle.toc.properties.hidden) {
			App.reader.showControl(Monocle.toc);
		}
		else {
			App.reader.hideControl(Monocle.toc);
		}
	});
	
	$('.about-us').click(function(){
		if (Monocle.overlay.properties.hidden) {
			App.reader.showControl(Monocle.overlay);
		}
		else {
			App.reader.hideControl(Monocle.overlay);
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
		else if (e.which == 27) {
			App.panel.retract();
		}
	});
	$('#app').mousewheel(function(event, delta, deltaX, deltaY) {
		if (!App.isScrolling) {
			if (deltaX < 0 || deltaY > 0) {
				App.reader.moveTo({ page: App.reader.getPlace().pageNumber() - 1});
			}
			else if (deltaX > 0 || deltaY < 0) {
				App.reader.moveTo({ page: App.reader.getPlace().pageNumber() + 1});
			}
			App.isScrolling = true;
			window.setTimeout(function(){
				App.isScrolling = false;
			}, 1500);
		}
	});
	$('.ctrl-panel, .monelem_controls_contents_container').mousewheel(function(event) {
		event.stopPropagation();
	});
	
	$('a.close').click(function(e){
		e.preventDefault();
		$('.ctrl-panel').addClass('hidden');
	});
	
	$('form', '.ctrl-panel').submit(function(e){
		e.preventDefault();
		if (!App.user) {
			return false;
		}
		var comment = {
			component: $('.component', this).val(),
			sentence: $('.sentence', this).val(),
			content: $('textarea.comment', this).val(),
			tweet: $('button.tweet').hasClass('active')
		};
		$.ajax({
			type: 'POST',
			url: App.API + 'annotations',
			data: comment,
			dataType: 'json',
			xhrFields: { withCredentials: true }
		});
		$('textarea.comment', this).val('');
		comment.user = App.user;
		App.panel.addComment(comment);
		App.panel.countComments();
		if (!App.componentmap[comment.sentence]){
			App.componentmap[comment.sentence] = 0;
		}
		App.componentmap[comment.sentence] += 1;
		App.bar.addBubble({sentence: comment.sentence});
	});
	
	$('button.tweet').click(function(){
		$(this).toggleClass('active');
	});
	
	// Initialize the large-screen TOC
	components = bookData.getContents();
	for (var i in components) {
		$('#menu-large').append('<li id="' + components[i].src + '">' + components[i].title + '</li>');
	}
	$('#menu-large li').each(function(){
		$(this).click(function(){
			App.reader.moveTo({componentId: this.id, page: 1});
		});
	});
});


App.panel = {
	templateComment: $('#tpl-comment').html(),
	keepOpened: false,
	location: {
		sentence: null
	},
	retract: function(){
		$('.ctrl-panel').addClass('hidden');
		App.panel.clear();
	},
	clear: function(){
		$('.header', '.ctrl-panel-bottom').html('');
		$('.comments-container').html('');
		App.panel.location.sentence  = null;
	},
	addComment: function(comment){
		if (comment.time) {
			comment.timeago = moment.unix(comment.time).fromNow();
		}
		else {
			comment.timeago = "a few seconds ago";
		}
		// HTML-escape the comment
		comment.content = $('<div>').text(comment.content).html();
		// replace the URL by <a> tags
		comment.content = linkify(comment.content);
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
		App.panel.location.sentence  = data.sentence;
		
		$('.excerpt', '.ctrl-panel').text(data.excerpt);
		$('.component', '.ctrl-panel').val(data.component);
		$('.sentence', '.ctrl-panel').val(data.sentence);
		$('.ctrl-panel').removeClass('hidden');
		
		$.getJSON(App.API + 'sentences/annotations', {component: data.component, sentence: data.sentence}, function(comments){
			$.each(comments, function(i, comment){
				App.panel.addComment(comment);
			});
			App.panel.countComments();
		});
		document.location.hash = data.component + ':' + data.sentence;
	}
};


App.bar = {
	addBubble: function(data, top){
		var bubbleId = 'bubble_' + data.sentence;
		if ($('#' + bubbleId).length === 0 && top) {
			var bubble = $('<div id="' + bubbleId + '" class="bubble"></div>').css('top', top + 30);
			bubble.click(function(){
				if (App.panel.location.sentence === data.sentence) {
					App.panel.retract();
				}
				else {
					App.panel.open(data);
				}
			});
			bubble.appendTo('.ctrl-bar');
		}
		$('#' + bubbleId).text(App.componentmap[data.sentence]);
	},
	createBubbles: function(evt){
		if (!App.componentmap) {
			// The data isn't fetched yet, this function will be called again when componentmap is ready
			return;
		}
		// evt.m.pageNumber isn't available when evt is a componentchange
		var locus = evt.m.page.m.place.getLocus();
		var pageOffset = evt.m.page.m.dimensions.locusToOffset({page: locus.page});
		var nextPageOffset = evt.m.page.m.dimensions.locusToOffset({page: locus.page + 1});

		$('.ctrl-bar').empty();
		
		// @see http://stackoverflow.com/a/11107977/593036
		var doc = evt.m.page.m.activeFrame.contentDocument;
		
		var t = -1;
		$(doc).find('span.s').each(function(i){
			var sId = /s[0-9]+/.exec($(this).attr('class'))[0].substring(1);
			var position = $(this).position();
			if (position.left >= pageOffset && position.left < nextPageOffset) {
				if (t < 0) {
					// Use the first sentence to update document.location
					$.cookie('current_component', locus.componentId);
					$.cookie('current_sentence', 's'+sId);
				}
				// Prevent collisions:
				if (position.top >= t) {
					t = position.top;
					if (App.componentmap[sId]) {
						App.bar.addBubble({
							excerpt: $(this).text(),
							component: locus.componentId,
							sentence: sId
						}, position.top);
						if (! $(this).hasClass('highlight')) {
							$(this).addClass('highlight');
						}
					}
				}
			}
		});
	}
};

Monocle.Events.listen('reader', 'monocle:firstcomponentchange', function(evt) {
	if (openPanel) {
		var doc = evt.m.page.m.activeFrame.contentDocument;
		openPanel.excerpt = $(doc).find('span.s' + openPanel.sentence).text();
		App.panel.keepOpened = true;
		App.panel.open(openPanel);
		openPanel = null;
	}
});

// Apply content styles:
Monocle.Events.listen('reader', 'monocle:componentmodify', function(evt){
	var css = document.createElement('link');
	css.type = 'text/css';
	css.rel  = 'stylesheet';
	css.href = 'http://fonts.googleapis.com/css?family=Domine:400,700';
	evt.m.document.head.appendChild(css);
});

Monocle.Events.listen('reader', 'monocle:componentchange', function(evt) {
	var component = evt.m.component.properties.id;
	var doc = evt.m.page.m.activeFrame.contentDocument;
	App.componentmap = null;
	
	$.getJSON(
		App.API + 'components/annotations/counts',
		{component: component},
		function(sentences){
			App.componentmap = sentences;
			App.bar.createBubbles(evt);
			$(doc).find('span.s').each(function(i){
				var sId = /s[0-9]+/.exec($(this).attr('class'))[0].substring(1);
				if (App.componentmap[sId]) {
					$(this).addClass('highlight');
				}
				this.onclick = function(){
					App.panel.open({
						excerpt: $(this).text(),
						component: component,
						sentence: sId
					});
				};
			});
		}
	);
	
	$(doc).find('a').each(function(){
		$(this).click(function(evt){
			if (this.getAttribute('href')[0] == '#') {
				// this.href return the completely specified url
				var name = this.getAttribute('href').substring(1);
				App.reader.moveTo({selector: 'a[name="' + name + '"]'});
			}
			else {
				window.open(this.href, '_blank');
			}
			evt.stopPropagation();
			evt.preventDefault();
			return false;
		});
	});
	body = $('body');
	$(doc).find('body').keydown(function(e){
		$('body').trigger(e);
	});
});

Monocle.Events.listen('reader', 'monocle:pagechange', App.bar.createBubbles);

Monocle.Events.listen('reader', 'monocle:pagechange', function (evt) {
	$('.chapter-title').text(App.reader.getPlace(evt.m.page).chapterTitle());
});

$.each(['monocle:pagechange', 'monocle:boundarystart', 'monocle:boundaryend'], function(i, evtName){
	Monocle.Events.listen('reader', evtName, function(evt){
		if (!App.panel.keepOpened) {
			App.panel.retract();
		}
		else {
			App.panel.keepOpened = false;
		}
	});
});
