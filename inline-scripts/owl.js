
jQuery('.hero_block > .elementor-widget-wrap').addClass('hero_slider owl-carousel owl-theme');	
jQuery('.hero_slider').owlCarousel({
    items:1,
    loop:true,
    autoplay:true,
    autoplayTimeout:3000,
    mouseDrag: false,
    singleItem: true,
    animateIn: 'fadeIn',
    animateOut: 'fadeOut',
    autoplayHoverPause:true,
    nav: false,
    dots:false,
    smartSpeed: 500,
    responsive: {
        0:{
            items: 1,
        },
        768:{
            items: 1,
        },
        1025:{
            items: 1,
        }
    }
});
jQuery('.number .wpcf7-form-control-wrap input').on('keypress', function(e) {
    //if the letter is not digit then display error and don't type anything
    if (e.which != 8 && e.which != 0 && (e.which < 43 || e.which > 57)) {
        return false;
    }
});


jQuery(document).ready(function() {
    // Smooth scrolling to section on click
    jQuery(".res_caregory a").on("click", function(event) {
        event.preventDefault();
        var target = jQuery(this).attr("href");
        jQuery("html, body").animate({
            scrollTop: jQuery(target).offset().top
        }, 800); // Adjust the animation speed if desired
    });
});