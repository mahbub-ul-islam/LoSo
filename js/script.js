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

// SECTION: smooth scrolling

$(document).ready(function () {
    $(".nav-item, #scroll-to-top").click(function () {
        if (
            location.pathname.replace(/^\//, "") ==
                this.pathname.replace(/^\//, "") &&
            location.hostname == this.hostname
        ) {
            var target = $(this.hash);
            target = target.length
                ? target
                : $("[name=" + this.hash.slice(1) + "]");
            if (target.length) {
                $("html, body").animate(
                    {
                        scrollTop: target.offset().top,
                    },
                    1000
                );
                return false;
            }
        }
    });
});

// SECTION: active menu item on click

$(document).ready(function () {
    $(".navbar-nav li a").click(function () {
        $(".navbar-nav li a").parent().removeClass("active");
        $(this).parent().addClass("active");
    });
});

// SECTION: highlighted menu item on scroll

$(document).ready(function () {
    $(window).scroll(function () {
        $("section").each(function () {
            const sectionName = $(this).attr("id");
            const height = $(this).outerHeight();
            const greaterTop = $(this).offset().top - 50;

            if (
                $(window).scrollTop() > greaterTop &&
                $(window).scrollTop() < greaterTop + height
            ) {
                $(".navbar-nav li a[href='#" + sectionName + "']")
                    .parent()
                    .addClass("active");
            } else {
                $(".navbar-nav li a[href='#" + sectionName + "']")
                    .parent()
                    .removeClass("active");
            }
        });
    });
});

// SECTION: add auto padding to header

$(document).ready(function () {
    setInterval(function () {
        const windowHeight = $(window).height();
        const containerHeight = $(".header-container").height();
        const paddingTop = windowHeight - containerHeight;

        $(".header-container").css({
            "padding-top": Math.round(paddingTop / 2) + "px",
            "padding-bottom": Math.round(paddingTop / 2) + "px",
        });
    }, 10);
});
