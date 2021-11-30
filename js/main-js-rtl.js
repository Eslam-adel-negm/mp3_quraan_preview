/*global $, console*/

$(function () {

    'use strict';
    var scene = document.getElementById('scene')
    var parallax = new Parallax(scene)
    
    var scene = document.getElementById('scene-two')
    var parallax = new Parallax(scene)
        // Media Section
    
    $('.slider-for').slick({
        rtl: false,
        fade: true,
        speed: 600,
        autoplay: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplaySpeed: 4000,
        asNavFor: '.slider-nav'
    });
    
    $('.slider-nav').slick({
        rtl: false,
        slidesToShow: 6,
        vertical: true,
        slidesToScroll: 1,
        centerPadding: '0px',
        asNavFor: '.slider-for',
        dots: false,
        nextArrow:  '<i class="prevnews  fa fa-angle-down"></i>',
        prevArrow:  '<i class="nextnews  fa fa-angle-up"></i>',
        centerMode: false,
        focusOnSelect: true,
        responsive: [
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 3,
                }
            }]
        });
    
        //// Client Slider
    
    $('.videos-slider').slick({
        infinite: false,
        rtl: true,
        dots: false,
        variableWidth: true,
        slidesToScroll: 1,
        infinite: true,
        prevArrow:  '<i class="prevnews  fas fa-chevron-left"></i>',
        nextArrow:  '<i class="nextnews  fas fa-chevron-right"></i>',
        responsive: [
            {
                breakpoint: 1200,
                settings: {
//                    slidesToShow: 3
                }
    },
            {
                breakpoint: 992,
                settings: {
//                    slidesToShow: 3
                }
    },
            {
                breakpoint: 767,
                settings: {
//                    slidesToShow: 2
                }
    }
  ]
    });
    
    /// active track
    $('.ms_weekly_box').on('click', function () {
        
        if ($(this).hasClass('ms_active_play')) {
            $(this).removeClass('ms_active_play');
        } else {
            $('.ms_weekly_box').removeClass('ms_active_play');
            $(this).addClass('ms_active_play');
            
        }   });
    
    /// active letter
    $('.reciters-all-letter ul li').on('click', function () {
        $('.reciters-all-letter ul li').removeClass('selected-letter');
        $(this).addClass('selected-letter'); 
      });
    
    /// toggle play in header
    $('.my-btn-big-icon.play-btn').on('click', function () {
        $(this).toggleClass('pause-btn'); 
      });
    
    /// toggle ads
    $('.ads-holder a.close-ads').on('click', function () {
        $('.ads-holder').toggleClass('ads-open'); 
      });
    

    
        //// video popup
    
    $('.video-popup').magnificPopup({
        disableOn: 700,
        type: 'iframe',
        mainClass: 'mfp-fade',
        removalDelay: 160,
        preloader: false,
        fixedContentPos: false
  
});
});
