//import { relative } from "path";

document.addEventListener('DOMContentLoaded', function() {

    /** NAVBAR **/

    window.onscroll = function() { navFunction() };
    // Get the navbar
    var navbar = document.getElementById("navbar");
    // Get the offset position of the navbar
    var sticky = navbar.offsetTop;
    // Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
    function navFunction() {
        if (window.pageYOffset >= sticky) {
            navbar.classList.add("sticky");
        } else {
            navbar.classList.remove("sticky");
        }
    }

});

/** ABOUT ME FRAME POP UPS **/

var imgClicked = false;

function imgOnClick() {

    var number = $(this).attr("value");

    if (imgClicked) {
        $(this).animate({
            width: '100%',
            top: '0%',
            left: '0%',
        });

        $(this).css("z-index", "999");

        $('#framed-img-' + number).removeClass("fade-filter");

        $(".framed-text--" + number).css("display", "none");

        imgClicked = false;

    } else {
        if (number === "2" || number === "4") {
            console.log(number);
            $(this).animate({
                top: '50%',
                left: '-50%',
                width: '148%',
                position: 'absoulute',
            });
        } else {
            $(this).animate({
                width: '200%',
            });
        }

        $(this).css("z-index", "9000");

        $('#framed-img-' + number).addClass("fade-filter");

        $(".framed-text--" + number).css("display", "block");
        imgClicked = true;
    }

};


$(document).on("click", ".framed-img", imgOnClick);