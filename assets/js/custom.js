var nav = $(".navbar");

var menuItems = [
	{"scroll_to": "intro", "elem": $("#intro")},
	{"scroll_to": "welcome", "elem": $("#welcome")},
	{"scroll_to": "about", "elem": $("#about")},
	{"scroll_to": "faq", "elem": $("#faq")},
	{"scroll_to": "participants", "elem": $("#participants")},
	{"scroll_to": "mentors", "elem": $("#mentors")},
	{"scroll_to": "sponsor", "elem": $("#sponsors")}
];
var menuItemsLen = menuItems.length;
var selectedMenu = "intro";
var scrollingToItem = false;

$(window).scroll(function() {
	var scrollHeight = $(this).scrollTop();
	var middleScreenHeight = scrollHeight + ($(this).height() / 2);

	for(var i = 0; i < menuItemsLen; i++) {
		var topOffset = menuItems[i]["elem"].offset().top;
		var height = menuItems[i]["elem"].height();

		if(middleScreenHeight >= topOffset && middleScreenHeight <= (topOffset + height)) {
			if(selectedMenu != menuItems[i]["scroll_to"] && !scrollingToItem) {
				var scroll_to = menuItems[i]["scroll_to"];
				// change the selected menu element
				$(".navbar-nav li").removeClass("active");
				$(".navbar-nav li a[scroll_to='"+scroll_to+"']").parent().addClass("active");
				selectedMenu = scroll_to;
			}
		}
	}
});

$(".navbar-nav li a").click(function(e) {
	var scrollTo = $(this).attr('scroll_to');
	var elem = $("#"+scrollTo);
	scrollingToItem = true;
	$('html, body').animate({
        scrollTop: elem.offset().top - nav.height()
    }, 1000, function() {
    	scrollingToItem = false;
    });
    $(".navbar-nav li").removeClass("active");
    $(this).parent().addClass("active");
    e.preventDefault();
});