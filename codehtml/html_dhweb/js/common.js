$(document).ready(function(){
    $("nav#menu-mobile").mmenu({});


    // HAMBERGER JS
    var forEach=function(t,o,r){if("[object Object]"===Object.prototype.toString.call(t))for(var c in t)Object.prototype.hasOwnProperty.call(t,c)&&o.call(r,t[c],c,t);else for(var e=0,l=t.length;l>e;e++)o.call(r,t[e],e,t)};
    var hamburgers = document.querySelectorAll(".hamburger");
    if (hamburgers.length > 0) {
      forEach(hamburgers, function(hamburger) {
        hamburger.addEventListener("click", function() {
          this.classList.toggle("is-active");
        }, false);
      });
    }
    setInterval(function(){ 
    	if (!$("nav#menu-mobile").hasClass("mm-opened")){
    		$(".hamburger").removeClass("is-active");
    	}
    });

    // MENU ADD ICON
   	$('.menu > li:has(ul.sub-menu) > a').append( "<i class='show-child-menu fa fa-angle-down'></i>" );
    $('.mcn-slick ul.lst-partner').slick({
	    dots: false,
	    swipe: true,
	    infinite: true,
	    arrows: true,
	    speed: 1000,
	    autoplay: false,
	    slidesToShow: 6,
	    slidesToScroll: 1,
	    responsive: [{
			breakpoint: 990,
			settings: {
				slidesToShow: 4,
				swipe: true,
			}
		},{
			breakpoint: 630,
			settings: {
				slidesToShow: 3,
			}
		},{
			breakpoint: 430,
			settings: {
				slidesToShow: 2,
			}
		}]
	});

	$('.owl-carousel-partner').owlCarousel({
		loop:true,
		margin:30,
		dots: false,
		nav:true,
		navText: ['<i class="ic-owl-left"></i>','<i class="ic-owl-left"></i>'],
		autoplay: true,
		autoplayTimeout: 2000,
		autoplayHoverPause: false,
		navSpeed: 1550,
		autoplaySpeed: 1550,
		responsive:{
			0:{
				items:1
			},
			480:{
				items:1
			},
			768:{
				items:2
			},
			1000:{
				items:6
			}
		}
	});

	$('.owl-carousel-comment-us').owlCarousel({
		loop:true,
		margin:0,
		dots: false,
		nav:true,
		navText: ['<i class="ic-owl-left"></i>','<i class="ic-owl-left"></i>'],
		autoplay: true,
		autoplayTimeout: 5000,
		autoplayHoverPause: false,
		navSpeed: 1550,
		autoplaySpeed: 1550,
		responsive:{
			0:{
				items:1
			},
			480:{
				items:1
			},
			768:{
				items:1
			},
			1000:{
				items:1
			}
		}
	});

	

});

