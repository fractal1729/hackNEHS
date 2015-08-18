$(document).ready(function(){
var nav = $(".navbar");

var menuItems = ["intro", "welcome", "about", "faq", "participants", "mentors", "sponsors"];
var selectedMenu = "intro";
var scrollingToItem = false;

$(window).scroll(function() {
	var scrollHeight = $(this).scrollTop();
	var middleScreenHeight = scrollHeight + ($(this).height() / 2);

	for(var i = 0; i < menuItems.length; i++) {
		var topOffset = $("#"+menuItems[i]).offset().top;
		var height = $("#"+menuItems[i]).height();

		if(middleScreenHeight >= topOffset && middleScreenHeight <= (topOffset + height)) {
			if(selectedMenu != menuItems[i] && !scrollingToItem) {
				var scroll_to = menuItems[i];
				// change the selected menu element
				$(".navbar-nav li").removeClass("active");
				$(".navbar-nav li a[scroll-to='"+scroll_to+"'").parent().addClass("active");
				selectedMenu = scroll_to;
				if(window.console) console.log("hi");
			}
		}
	}
});

$(".navbar-nav li a").click(function(e) {
	scrollingToItem = true;
	var scrollTo = $(this).attr('scroll-to');
	var elem = $("#"+scrollTo);
	$('html, body').animate({
        scrollTop: elem.offset().top - nav.height()
    }, 1000, function() {
    	scrollingToItem = false;
    });
    $(".navbar-nav li").removeClass("active");
    $(this).parent().addClass("active");
    e.preventDefault();
});

});