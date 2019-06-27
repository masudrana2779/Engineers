$(function () {
    "use strict";
    
    
    
    function vPlay() {
        $(".play-btn").on("click",function(ev){
            var $wrapper = $('.js-videoWrapper');
            var $iframe = $wrapper.find('.js-videoIframe');
            var src = $iframe.data('src'); 
            if( ($wrapper.hasClass('videoWrapperActive'),($(this).parents().hasClass('active')))){
                $wrapper.removeClass('videoWrapperActive');
                $iframe.attr('src','');
                $(this).parents().removeClass('active');
            }
            else{
                $wrapper.addClass('videoWrapperActive');
                $iframe.attr('src',src);
                $(this).parents().addClass('active');
            }
            return false;
        });
        
    }
    vPlay();
    
    
    
    
    function featured_video_wrap_slider() {
        
        $('.featured_video_slider').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: false,
            autoplaySpeed: 3000,
            arrows: false,
            centerMode: true,
            centerPadding: '0px',
            dots: false,
            asNavFor: '.featured_sing_slider',
            fade: true,
            responsive: [
                {
                    breakpoint: 991,
                    settings: {
                        slidesToShow: 1,
                    }
            },
                {
                    breakpoint: 640,
                    settings: {
                        arrows: false,
                        slidesToShow: 1,
                    }
            }
            ]
        });

        $('.featured_sing_slider').slick({
            slidesToShow: 5,
            slidesToScroll: 1,
            autoplay: false,
            autoplaySpeed: 3000,
            arrows: false,
            centerMode: true,
            centerPadding: '0px',
            dots: false,
            focusOnSelect: true,
            asNavFor: '.featured_video_slider',
            responsive: [
                {
                    breakpoint: 991,
                    settings: {
                        slidesToShow: 4,
                    }
            },
                {
                    breakpoint: 640,
                    settings: {
                        arrows: false,
                        slidesToShow: 3,
                    }
            },
                {
                    breakpoint: 480,
                    settings: {
                        arrows: false,
                        slidesToShow: 1,
                    }
            }
            ]
        });
    }
    featured_video_wrap_slider();

    function committeeSlider() {
        
        $('.committee_member_slider').slick({
            slidesToShow: 3,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 3000,
            arrows: false,
            centerMode: true,
            centerPadding: '0px',
            dots: false,
            asNavFor: '.committee_member_details_slider',
            focusOnSelect: true,
            responsive: [
                {
                    breakpoint: 991,
                    settings: {

                    }
            },
                {
                    breakpoint: 640,
                    settings: {
                        arrows: false,
                        slidesToShow: 3,
                    }
            }
            ]
        });

        $('.committee_member_details_slider').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 3000,
            arrows: false,
            dots: false,
            asNavFor: '.committee_member_slider',
            responsive: [
                {
                    breakpoint: 991,
                    settings: {

                    }
            },
                {
                    breakpoint: 640,
                    settings: {
                        arrows: false,
                    }
            }
            ]
        });
    }
    committeeSlider();
    
    
    function success_slider(){
        $('.success_slider').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 3000,
            centerMode: true,
            centerPadding: '480px',
            arrows: true,
            prevArrow: ".cus_slick_prev",
            nextArrow: ".cus_slick_next",
            dots: false,
            responsive: [
            {
                breakpoint: 1650,
                settings: {
                    centerPadding: '350px',
                    }
                },
            {
                breakpoint: 1450,
                settings: {
                    centerPadding: '300px',
                    }
                },
            {
                breakpoint: 1366,
                settings: {
                    centerPadding: '250px',
                    }
                },
            {
                breakpoint: 1250,
                settings: {
                    centerPadding: '150px',
                    }
                },
            {
                breakpoint: 1050,
                settings: {
                    centerPadding: '100px',
                    }
                },
            {
                breakpoint: 992,
                settings: {
                    centerPadding: '100px',
                    }
                },
            {
                breakpoint: 900,
                settings: {
                    centerPadding: '0',
                    }
                },
            {
                breakpoint: 640,
                settings: {
                    arrows: false,
                    centerPadding: '0',
                }
            },
            {
                breakpoint: 620,
                settings: {
                    centerPadding: '0',
                }
            }
            ]
        });
    }
    success_slider();
    
    
    function executive_slider(){
        $('.executive_slider').slick({
            slidesToShow: 4,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 3000,
            arrows: true,
            dots: true,
            responsive: [
                {
                    breakpoint: 991,
                    settings: {
                        
                    }
            },
                {
                    breakpoint: 640,
                    settings: {
                        arrows: false,
                    }
            }
            ]
        });
    }
    executive_slider();
});