$(window).load(function() {

    "use strict";

    /*
     ----------------------------------------------------------------------
     Preloader
     ----------------------------------------------------------------------
     */
    $(".loader").delay(400).fadeOut();
    $(".animationload").delay(400).fadeOut("fast");

});

$(document).ready(function() {

    $('.sw_btn').on("click", function(){
        $("body").toggleClass("light");
    });

    /*
     ----------------------------------------------------------------------
     Nice scroll
     ----------------------------------------------------------------------
     */
    $("html").niceScroll({
        cursorcolor: '#fff',
        cursoropacitymin: '0',
        cursoropacitymax: '1',
        cursorwidth: '2px',
        zindex: 999999,
        horizrailenabled: false,
        enablekeyboard: false
    });

});
