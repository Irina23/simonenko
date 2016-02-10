
jQuery(document).ready(function() {

    jQuery('.slider').owlCarousel({
        loop:true,
        nav:false,
        autoHeight:true,
        autoplay:true,
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


    jQuery(document).ready(function ($) {
        var $sync1 = $(".big-images"),
            $sync2 = $(".thumbs"),
            flag = false,
            duration = 300;

        $sync1
            .owlCarousel({
                items: 1,
             //   margin: 10,
               // loop:true,
               // nav: true,
                dots: false
            })
            .on('change.owl.carousel', function (e) {
                if (e.namespace && e.property.name === 'items' && !flag) {
                    flag = true;
                    $sync2.trigger('to.owl.carousel', [e.item.index, duration, true]);
                    flag = false;
                }
            });

        $sync2
            .owlCarousel({
                margin:18,
                items: 3,
               // loop:true,
             //   nav: true,
             //   center: true,
                dots: false
            })
            .on('click', '.owl-item', function () {
                $sync1.trigger('to.owl.carousel', [$(this).index(), duration, true]);
            })
            .on('change.owl.carousel', function (e) {

                if (e.namespace && e.property.name === 'items' && !flag) {
                    flag = true;
                    $sync1.trigger('to.owl.carousel', [e.item.index, duration, true]);
                    flag = false;
                }
            });
    });
});

