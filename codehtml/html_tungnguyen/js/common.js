
$(document).ready(function(){
    $("nav#menu-mobile").mmenu();


    // SEARCH 
    $( ".mcn-search #btn_search").on("click", function (event) {
    	event.stopPropagation();
    	$( ".mcn-formsearch").slideToggle( "slow", function() {
    	});
    });
    $(".mcn-formsearch").on("click", function (event) {
    	event.stopPropagation();
    });

    // VIDEO POPUP 
    
    // SLICK 
    $('.lst-feedback ul').slick({
	    dots: true,
	    swipe: true,
	    infinite: true,
	    arrows: false,
	    speed: 1000,
	    autoplay: false,
	    slidesToShow: 1,
	    slidesToScroll: 1,
	    responsive: [{
			breakpoint: 990,
			settings: {
				slidesToShow: 1,
				swipe: true,
			}
		},{
			breakpoint: 630,
			settings: {
				slidesToShow: 1,
			}
		},{
			breakpoint: 430,
			settings: {
				slidesToShow: 1,
			}
		}]
	});
  

	

});

$(document).on("click", function () {
    $(".mcn-formsearch").slideUp( "slow", function() {});
});

