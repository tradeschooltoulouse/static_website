// Hello.
//
// This is The Scripts used for ___________ Theme
//
//

function main() {

(function () {
   'use strict';
 	// Toggle menu when cliked
    //==========================================
   $('.navbar-collapse a').click(function (e) {
       if($('.navbar-toggle').css('display') == 'block' && !$(this).siblings().length){
           $('.navbar-collapse').collapse('toggle');
       }
   });
 	// Back to top icon
    //==========================================
    jQuery(document).ready(function() {
		var offset = 600;
		var duration = 300;
        var visibleClass = "visible";
		jQuery(window).scroll(function() {
			if (jQuery(this).scrollTop() > offset) {
				jQuery('.go-top').addClass(visibleClass);
			} else {
				jQuery('.go-top').removeClass(visibleClass);
			}
		});
		jQuery('.go-top').click(function(event) {
			event.preventDefault();
			jQuery('html, body').animate({scrollTop: 0}, duration);
			return false;
		})
	});
 	// Smooth Scrolling
    //==========================================
    $(function() {
      $('a.scroll').click(function() {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
          var target = $(this.hash);
          target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
          if (target.length) {
            $('html,body').animate({
              scrollTop: target.offset().top -50
            }, 1000);
            return false;
          }
        }
      });
    });

    /*====================================
    Script for the Counters for Facts Section
    ======================================*/
    $('.count').each(function() {
        var $this = $(this);
        $this.data('target', parseInt($this.html()));
        $this.data('counted', false);
        $this.html('0');
    });
    $(window).bind('scroll', function() {
        var speed = 3000;
        $('.count').each(function() {
            var $this = $(this);
            if (!$this.data('counted') && $(window).scrollTop() +
                $(window).height() >= $this.offset().top) {
                $this.data('counted', true);
                $this.animate({
                    dummy: 1
                }, {
                    duration: speed,
                    step: function(now) {
                        var $this = $(this);
                        var val = Math.round(
                            $this.data(
                                'target') *
                            now);
                        $this.html(val);
                        if (0 < $this.parent(
                            '.value').length) {
                            $this.parent(
                                '.value').css(
                                'width',
                                val + '%');
                        }
                    }
                });
            }
        });
    }).triggerHandler('scroll');

    /*====================================
    Portfolio Carousel
    ======================================*/
  	$(document).ready(function() {
  	  var owl = $("#owl-example");
  	  owl.owlCarousel({

  	      itemsCustom : [
  	        [0, 1],
  	        [450, 1],
  	        [660, 2],
  	        [700, 2],
  	        [1200, 3],
  	        [1600, 3]
  	      ],
  	      navigation : false,
  	      pagination: true,
  	  });

  	});

    /*====================================
    Portfolio Isotope Filter
    ======================================*/
    $(window).load(function() {
        var $container = $('#itemsWork , #itemsWorkTwo, #itemsWorkThree');
        $container.isotope({
            filter: '* , all',
            animationOptions: {
                duration: 750,
                easing: 'linear',
                queue: false
            }
        });
        $('.cat a').click(function() {
            $('.cat .active').removeClass('active');
            $(this).addClass('active');
            var selector = $(this).attr('data-filter');
            $container.isotope({
                filter: selector,
                animationOptions: {
                    duration: 750,
                    easing: 'linear',
                    queue: false
                }
            });
            return false;
        });

    });

    /*====================================
    Nivo Lightbox
    ======================================*/
    // Agency Portfolio Popup
    $('#tst-workshop-categories a').nivoLightbox({
            effect: 'slideDown',
            keyboardNav: true,
        });

    $(document).ready(function() {

  $("#carousel-art-culture, #carousel-savoir-theorique, #carousel-gestion, #carousel-dev-personnel, #carousel-sport, #carousel-informatique, #carousel-environnement, #carousel-diy").owlCarousel({

      navigation : true, // Show next and prev buttons
      navigationText: [
          "<i class='fa fa-chevron-left'></i>",
          "<i class='fa fa-chevron-right'></i>"
      ],
      slideSpeed : 300,
      pagination: false,
      singleItem:true

      // "singleItem:true" is a shortcut for:
      // items : 1,
      // itemsDesktop : false,
      // itemsDesktopSmall : false,
      // itemsTablet: false,
      // itemsMobile : false
  });
});
}());
}
main();
