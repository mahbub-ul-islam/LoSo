"use strict";

// SECTION: navbar
// menubar show and hide
$(document).ready(function () {
    $(window).scroll(function () {
        if ($(window).scrollTop() < 80) {
            $(".navbar").css({
                "margin-top": "-100px",
                opacity: "0",
            });
            $(".navbar-default").css({
                "background-color": "rgba(59, 59, 59, 0)",
            });
            // console.log("hide");
        } else {
            $(".navbar").css({
                "margin-top": "0px",
                opacity: "1",
            });
            $(".navbar-default").css({
                "background-color": "rgba(59, 59, 59, 0.7)",
                "border-color": "#444",
            });
            $(".navbar-brand img").css({
                height: "35px",
                "padding-top": "0px",
            });
            $(".navbar-nav > li > a").css({
                "padding-top": "15px",
            });
        }
    });
});
