
jQuery(document).ready(function() {

    jQuery('.slider').owlCarousel({
        loop:true,
        nav:false,
        autoHeight:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:1
            }
        }
    })

});