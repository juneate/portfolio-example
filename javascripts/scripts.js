// Fluidbox plugin
$('.photos a').fluidbox();


// Stack the images like masonary (tiles)
$('.photos').masonry({
	itemSelector: '.photos > div',
	columnWidth: 390
});


// Anchor Scrool plugin
$('.anchor-scroll').anchorScroll({
    scrollSpeed: 200, // scroll speed
    offsetTop: 80 // offset for fixed top bars (defaults to 0)
 });

// Sweet alerts helps us to communicate with users!
swal({	title: "Hey!",
		text: "You are great!",
		type: "info",
		confirmButtonText: "Thanks" });

// Make the menu draggable
$('.bar').draggable();


// When the page scrolls...
$(document).on('scroll', function() {

	// How many px were scrolled
	var pxscrolled = $(this).scrollTop();
	console.log(pxscrolled);

	// Apply the number of px scrolled on the window to the logo (negative, so it goes up)
	$('.logo').css('top', -pxscrolled);

	// How tall is the window?  (window = viewport)
	var winheight = $(window).height();


	// Apply percentage of scroll to the logo as an opacity
	var percentscrolled = pxscrolled / winheight;

	$('.logo').css('opacity', 1-percentscrolled);



	// Can I turn the background a different colour when the content
	// hits the top of the viewport/window??

	// YES, if the number of px scrolled, is greater than the height of the page

	if (pxscrolled >= winheight) {
		// $('.main').css('background-color','red');
		$('.bar').fadeIn();
	}
/*	else {
		// $('.main').css('background-color','white');
		$('.bar').fadeOut();
	}*/

});