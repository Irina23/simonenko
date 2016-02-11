
jQuery(document).ready(function() {

    jQuery('.slider').owlCarousel({
        loop:true,
        nav:false,
       // autoHeight:true,
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




    jQuery(".payment").validate({

        rules:{

            name:{
                required: true,
                minlength: 2

            },
            surname:{
                required: true,
                minlength: 2
            },
            country:{
                required: true

            },
            city:{
                required: true

            },
            street:{
                required: true

            },
            number:{
                required: true,
                digits: true

            },
            phone:{
                required: true,
                digits: true

            },
            email:{
                required: true,
                email: true
            }

        }



    });
    jQuery(".contacts").validate({

        rules:{

            name:{
                required: true,
                minlength: 2

            },

            email:{
                required: true,
                email: true
            },
            message:{
                required: true
            }

        }



    });
    jQuery(".subscription_mail").validate({

        rules:{


            email:{
                required: true,
                email: true
            }

        }



    });
    jQuery('.add_cart').validate();



});

window.onload = function(){
    document.getElementById('links').onclick = function (event) {
    event = event || window.event;
    var target = event.target || event.srcElement,
        link = target.src ? target.parentNode : target,
        options = {index: link, event: event},
        links = this.getElementsByTagName('a');
    blueimp.Gallery(links, options);
    };
};

