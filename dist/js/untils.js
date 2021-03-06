
jQuery(document).ready(function() {

    // subscriber
    /*jQuery('.subscriber').find('input[type="email"]').on('focus', function () {
     jQuery(this).addClass('focused');
     }).on('blur', function () {
     setTimeout(function () {
     jQuery(this).removeClass('focused');
     }.bind(this), 500);
     });*/

    /*var loop = ($('.slider li img').length > 1);

    jQuery(window).resize(function() {
        jQuery('.slider').owlCarousel({
            loop: loop,
            nav:false,
            autoHeight:true,
            autoplay:true,
            dots: loop,
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
    jQuery('.slider').owlCarousel({
        loop: loop,
        nav:false,
        autoHeight:true,
        autoplay:true,
        dots: loop,
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
    });*/









    jQuery(document).ready(function ($) {

        var $sync1 = $(".big-images"),
            $sync2 = $(".thumbs"),
            flag = false,
            duration = 300;

        $sync1
            .owlCarousel({
                items: 1,
                //autoWidth: true,
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
                margin:10,
                items: 3,
                //autoWidth: true,
                nav:true,
                // loop:true,
                //   nav: true,
                //   center: true,
                dots: true
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


        //jQuery(window).trigger('resize');

    });



    jQuery(window).load(function() {
        // Variable
        var posts = jQuery('.productfull .img-holder');
        posts.css("visibility", "hidden");
        jQuery('.productfull .img-holder:first-child').css("visibility", "visible");
        //jQuery(".productfull .image").resize();

        // Click function
        jQuery( ".productfull .radio.color input" ).click(function() {
            // Get data of category

            var customType = jQuery( this ).data('filter'); // category
            //console.log(customType);
            //console.log(posts.length); // Length of articles

            posts
                .css("visibility", "hidden")
                //.hide()
                .filter(function () {
                    return jQuery(this).data('cat') === customType;
                })
                .css("visibility", "visible");
            //.show();

            jQuery(window).trigger('resize');


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
            },
            message:{
                required: false
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



    jQuery(".navbar-toggle").on("click", function(){
        jQuery(".mobile-navbar-holder").slideToggle();
        jQuery(this).toggleClass("active");
        jQuery(".mobile-navbar").toggleClass("active");
    });



    jQuery(".filter .title").on("click", function(){
        if (jQuery(window).width() < 960) {
            jQuery(this).next().slideToggle();


        } else{
            jQuery(this).next().slideDown();
        }


    });






    if (jQuery('#liqpay, #novaposhta').is(':checked')){
        jQuery(".courier").hide();
        jQuery("#courier").prop( "checked", false );
        jQuery("#novaposhta2").prop( "checked", true );
        jQuery(".delivery_courier").hide();
        jQuery(".delivery_courier input").attr("data-validate",true);

    } else{
        jQuery(".courier").show();
        jQuery("#novaposhta2").prop( "checked", false );
        jQuery("#courier").prop( "checked", true );
        jQuery(".delivery_courier").show();
        jQuery(".delivery_courier input#street").attr("data-validate","name");
        jQuery(".delivery_courier input#number").attr("data-validate","number");

    }
    jQuery(".payments.radio input[type='radio']").change(function() {

        if (jQuery('#courier1').is(':checked')){
            jQuery(".novaposhta2").hide();
            jQuery("#novaposhta2").prop( "checked", false );
            jQuery("#courier").prop( "checked", true );
            jQuery(".delivery_novaposhta").hide();
            jQuery(".delivery_novaposhta input").attr("data-validate",true);


        } else{
            jQuery(".novaposhta2").show();
            jQuery("#courier").prop( "checked", false );
            jQuery("#novaposhta2").prop( "checked", true );
            jQuery(".delivery_novaposhta").show();
            jQuery(".delivery_novaposhta input#number_np").attr("data-validate","empty");

        }
        if (jQuery('#liqpay, #novaposhta').is(':checked')){
            jQuery(".courier").hide();
            jQuery("#courier").prop( "checked", false );
            jQuery("#novaposhta2").prop( "checked", true );
            jQuery(".delivery_courier").hide();
            jQuery(".delivery_courier input").attr("data-validate",true);



        } else{
            jQuery(".courier").show();
            jQuery("#novaposhta2").prop( "checked", false );
            jQuery("#courier").prop( "checked", true );
            jQuery(".delivery_courier").show();
            jQuery(".delivery_courier input#street").attr("data-validate","name");
            jQuery(".delivery_courier input#number").attr("data-validate","number");

        }

    });




    //filter get
    function showValues(clear) {
        var filter_data, $el;

        $el = $( ".filter" );

        filter_data = $el.serialize();
        //console.log( filter_data );
        $.ajax({
            type: "GET",
            url: "/filter",
            data: filter_data,
            success: function(data){
                //console.log(data);
                if (clear) {
                    jQuery(".list_product").html(data);
                } else {
                    jQuery(".list_product").find('.pagination').remove();
                    jQuery(".list_product").html(jQuery(".list_product").html() + data);
                }
            }
        });

    }
    $('.products').on('click', '.next a, .prev a', function (e) {
        e.preventDefault();
        $( ".filter" ).find('[name="page"]').val($(e.target).attr('href')[$(e.target).attr('href').length - 1]);
        showValues();
    });
    jQuery( ".filter input" ).change( function () {
        $( ".filter" ).find('[name="page"]').val(1);
        showValues(true);
    });
    showValues();







});


window.onload = function(){


    jQuery('.big-images').each(function () {
        this.onclick = function (event) {
            event = event || window.event;
            var target = event.target || event.srcElement,
                link = target.src ? target.parentNode : target,
                options = {index: link, event: event},
                links = this.getElementsByTagName('a');
            blueimp.Gallery(links, options);
        };
    });


    if ($.browser.safari && !$.browser.mobile ) $('body').addClass('client-safari');
    if ($.browser.iphone || $.browser.ipad || $.browser.ipad) $('body').addClass('client-ios');
    if ($.browser.msie) $('body').addClass('client-ie');
    if ($.browser.name == 'mozilla') $('body').addClass('client-moz');

};



/*!
 * jQuery Browser Plugin 0.1.0
 * https://github.com/gabceb/jquery-browser-plugin
 *
 * Original jquery-browser code Copyright 2005, 2015 jQuery Foundation, Inc. and other contributors
 * http://jquery.org/license
 *
 * Modifications Copyright 2015 Gabriel Cebrian
 * https://github.com/gabceb
 *
 * Released under the MIT license
 *
 * Date: 05-07-2015
 */
/*global window: false */

(function (factory) {
    if (typeof define === 'function' && define.amd) {
        // AMD. Register as an anonymous module.
        define(['jquery'], function ($) {
            return factory($);
        });
    } else if (typeof module === 'object' && typeof module.exports === 'object') {
        // Node-like environment
        module.exports = factory(require('jquery'));
    } else {
        // Browser globals
        factory(window.jQuery);
    }
}(function(jQuery) {
    "use strict";

    function uaMatch( ua ) {
        // If an UA is not provided, default to the current browser UA.
        if ( ua === undefined ) {
            ua = window.navigator.userAgent;
        }
        ua = ua.toLowerCase();

        var match = /(edge)\/([\w.]+)/.exec( ua ) ||
            /(opr)[\/]([\w.]+)/.exec( ua ) ||
            /(chrome)[ \/]([\w.]+)/.exec( ua ) ||
            /(iemobile)[\/]([\w.]+)/.exec( ua ) ||
            /(version)(applewebkit)[ \/]([\w.]+).*(safari)[ \/]([\w.]+)/.exec( ua ) ||
            /(webkit)[ \/]([\w.]+).*(version)[ \/]([\w.]+).*(safari)[ \/]([\w.]+)/.exec( ua ) ||
            /(webkit)[ \/]([\w.]+)/.exec( ua ) ||
            /(opera)(?:.*version|)[ \/]([\w.]+)/.exec( ua ) ||
            /(msie) ([\w.]+)/.exec( ua ) ||
            ua.indexOf("trident") >= 0 && /(rv)(?::| )([\w.]+)/.exec( ua ) ||
            ua.indexOf("compatible") < 0 && /(mozilla)(?:.*? rv:([\w.]+)|)/.exec( ua ) ||
            [];

        var platform_match = /(ipad)/.exec( ua ) ||
            /(ipod)/.exec( ua ) ||
            /(windows phone)/.exec( ua ) ||
            /(iphone)/.exec( ua ) ||
            /(kindle)/.exec( ua ) ||
            /(silk)/.exec( ua ) ||
            /(android)/.exec( ua ) ||
            /(win)/.exec( ua ) ||
            /(mac)/.exec( ua ) ||
            /(linux)/.exec( ua ) ||
            /(cros)/.exec( ua ) ||
            /(playbook)/.exec( ua ) ||
            /(bb)/.exec( ua ) ||
            /(blackberry)/.exec( ua ) ||
            [];

        var browser = {},
            matched = {
                browser: match[ 5 ] || match[ 3 ] || match[ 1 ] || "",
                version: match[ 2 ] || match[ 4 ] || "0",
                versionNumber: match[ 4 ] || match[ 2 ] || "0",
                platform: platform_match[ 0 ] || ""
            };

        if ( matched.browser ) {
            browser[ matched.browser ] = true;
            browser.version = matched.version;
            browser.versionNumber = parseInt(matched.versionNumber, 10);
        }

        if ( matched.platform ) {
            browser[ matched.platform ] = true;
        }

        // These are all considered mobile platforms, meaning they run a mobile browser
        if ( browser.android || browser.bb || browser.blackberry || browser.ipad || browser.iphone ||
            browser.ipod || browser.kindle || browser.playbook || browser.silk || browser[ "windows phone" ]) {
            browser.mobile = true;
        }

        // These are all considered desktop platforms, meaning they run a desktop browser
        if ( browser.cros || browser.mac || browser.linux || browser.win ) {
            browser.desktop = true;
        }

        // Chrome, Opera 15+ and Safari are webkit based browsers
        if ( browser.chrome || browser.opr || browser.safari ) {
            browser.webkit = true;
        }

        // IE11 has a new token so we will assign it msie to avoid breaking changes
        if ( browser.rv || browser.iemobile) {
            var ie = "msie";

            matched.browser = ie;
            browser[ie] = true;
        }

        // Edge is officially known as Microsoft Edge, so rewrite the key to match
        if ( browser.edge ) {
            delete browser.edge;
            var msedge = "msedge";

            matched.browser = msedge;
            browser[msedge] = true;
        }

        // Blackberry browsers are marked as Safari on BlackBerry
        if ( browser.safari && browser.blackberry ) {
            var blackberry = "blackberry";

            matched.browser = blackberry;
            browser[blackberry] = true;
        }

        // Playbook browsers are marked as Safari on Playbook
        if ( browser.safari && browser.playbook ) {
            var playbook = "playbook";

            matched.browser = playbook;
            browser[playbook] = true;
        }

        // BB10 is a newer OS version of BlackBerry
        if ( browser.bb ) {
            var bb = "blackberry";

            matched.browser = bb;
            browser[bb] = true;
        }

        // Opera 15+ are identified as opr
        if ( browser.opr ) {
            var opera = "opera";

            matched.browser = opera;
            browser[opera] = true;
        }

        // Stock Android browsers are marked as Safari on Android.
        if ( browser.safari && browser.android ) {
            var android = "android";

            matched.browser = android;
            browser[android] = true;
        }

        // Kindle browsers are marked as Safari on Kindle
        if ( browser.safari && browser.kindle ) {
            var kindle = "kindle";

            matched.browser = kindle;
            browser[kindle] = true;
        }

        // Kindle Silk browsers are marked as Safari on Kindle
        if ( browser.safari && browser.silk ) {
            var silk = "silk";

            matched.browser = silk;
            browser[silk] = true;
        }

        // Assign the name and platform variable
        browser.name = matched.browser;
        browser.platform = matched.platform;
        return browser;
    }

    // Run the matching process, also assign the function to the returned object
    // for manual, jQuery-free use if desired
    window.jQBrowser = uaMatch( window.navigator.userAgent );
    window.jQBrowser.uaMatch = uaMatch;

    // Only assign to jQuery.browser if jQuery is loaded
    if ( jQuery ) {
        jQuery.browser = window.jQBrowser;
    }

    return window.jQBrowser;
}));


