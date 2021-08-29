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
        }
    });
});
