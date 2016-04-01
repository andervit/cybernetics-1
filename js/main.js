$(document).ready(function() {

    // Search button
    $('#search').on('click', function() {

        var btn_search = $('.btn-search');
        var input_search = $('.input-search');

        if ( btn_search.hasClass('active-btn') &&  input_search.hasClass('active-input') ) {

            btn_search.removeClass('active-btn');
            input_search.removeClass('active-input');

            return true;
        }

        btn_search.addClass('active-btn');
        input_search.addClass('active-input');
    });

    // Carousel main

    $('#carousel').carousel({
        interval: 3000,
        pause: "false"
    });

    $('.stop-carousel').on('click', function() {
        $('#carousel').carousel('pause');
    });

    // Carousel mini
    $('.slider-mini').slick({
        dots: false,
        infinite: true,
        speed: 300,
        prevArrow:"<img class='a-left control-c prev slick-prev' src='img/Shape-left.png'>",
        nextArrow:"<img class='a-right control-c next slick-next' src='img/Shape-right.png'>",
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
        ]
    });

});