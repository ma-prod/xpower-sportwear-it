$ = jQuery.noConflict();//Fix

var hour_s = '00';
var minutes_s = 59;
var seconds_s = 59;

$(document).ready(function () {
    act_timer();
    //intialize flickity
    $('.header-carousel').flickity({
        cellAlign: 'center',
        adaptiveHeight: false,
        prevNextButtons: false,
        resize: true,
        contain: true,
        pageDots: false,
        imagesLoaded: true,
        autoPlay: 5000,
        wrapAround: true
    });
    $('.facts-carousel').flickity({
        cellAlign: 'center',
        adaptiveHeight: false,
        prevNextButtons: false,
        resize: true,
        contain: true,
        pageDots: false,
        imagesLoaded: true,
        autoPlay: 4000,
        wrapAround: true
    });
    $('.big-g-carousel').flickity({
        cellAlign: 'center',
        adaptiveHeight: false,
        prevNextButtons: false,
        resize: true,
        contain: true,
        pageDots: false,
        imagesLoaded: true,
        autoPlay: 4000,
        wrapAround: true
    });
    $('.opinions-carousel').flickity({
        cellAlign: 'center',
        adaptiveHeight: false,
        prevNextButtons: false,
        resize: true,
        contain: true,
        pageDots: false,
        imagesLoaded: true,
        autoPlay: 4000,
        wrapAround: true
    });

    $(document).on('click', 'a[href^="#"]', function(e) {
        var id = $(this).attr('href');

        var $id = $(id);
        if ($id.length === 0) {
            return;
        }

        e.preventDefault();
    
        var pos = $id.offset().top;
    
        $('body, html').animate({scrollTop: pos});
    });
});

function act_timer() {
    if (!(minutes_s == '00' && seconds_s == '00')) {
        seconds_s--;
        if (seconds_s == -01) {
            seconds_s = 59;
            minutes_s = minutes_s - 1;
        } else minutes_s = minutes_s;
        if (seconds_s <= 9) seconds_s = "0" + seconds_s;
        minutes_sh = minutes_s;
        if (minutes_s < 10) minutes_sh = '0' + minutes_s;
        $('#time ul').html("<li>" + hour_s + "<div class='podp'>ORE</div>" + "</li><li>" + minutes_sh + "<div class='podp'>MINUTI</div>" + "</li><li>" + seconds_s + "<div class='podp'>SECONDI</div>" + "</li>");
        setTimeout("act_timer()", 1000);
    } else {//finish
        $(window).scrollTop($('#order_frame').offset().top);
    }
}