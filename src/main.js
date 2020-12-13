var $ = require( "jquery" );

$(document).ready(function(){

// change section on click bottom menu (hero bottom menu)
    $('.bottom-menu ul li').click(function(){
        $('.bottom-menu ul').children('li').removeClass('active');
        $(this).addClass('active');
    });

// pop hero visibility
    // visible
    $('.special-offers').click(function(){
        $('.pop-hero-container').removeClass('d-none');
    });

    // hide by click on x
    $('.pop-hero .fa-times').click(function(){
        $('.pop-hero-container').addClass('d-none');
    });

    // hide by click outside the popup
    $('.pop-hero-container').click(function(event){
        if ($('.pop-hero-container').is(event.target)) {
            $('.pop-hero-container').addClass('d-none');
        };
    });


// video intro visibility
    $('.video-section').click(function(){
        $('.frame-container').removeClass('d-none');
    });

    // hide by click on x
    $('.frame-content .fa-times').click(function(){
        $('.frame-container').addClass('d-none');
        $('.frame-content iframe').attr('src', $('iframe').attr('src'));

    });

    // hide by click outside the popup
    $('.frame-container').click(function(event){
        if ($('.frame-container').is(event.target)) {
            $('.frame-container').addClass('d-none');
            $('.frame-content iframe').attr('src', $('iframe').attr('src'));
        };
    });


    // carousel
        // next
        $('.before-after-slider .rigth').click(function(){
            let active = $('.before-after-slider .content').children('.comparison.active');

            if (active.next('.comparison').length != 0) {
                active.next('.comparison').removeClass('d-none').addClass('active');
                active.removeClass('active').addClass('d-none');
            } else {
                $('.before-after-slider .content .comparison').first().removeClass('d-none').addClass('active');
                active.removeClass('active').addClass('d-none');
            };
        });

        // prev
        $('.before-after-slider .left').click(function(){
            let active = $('.before-after-slider .content').children('.comparison.active');

            if (active.prev('.comparison').length != 0) {
                active.prev('.comparison').removeClass('d-none').addClass('active');
                active.removeClass('active').addClass('d-none');
            } else {
                $('.before-after-slider .content .comparison').last().removeClass('d-none').addClass('active');
                active.removeClass('active').addClass('d-none');
            };
        });


        // before-after slider
        $('input[type=range]').on('input', function(event){

        let rangeValue = event.target.value;

        $('.slider-box').css({left: rangeValue + '%'});
        $('.drag-line').css({left: rangeValue + '%'});
        $('.slider img').css({left: -rangeValue + '%'})
    });
})
