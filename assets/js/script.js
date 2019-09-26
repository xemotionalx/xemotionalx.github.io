document.addEventListener('DOMContentLoaded', function() {

/** NAVBAR **/

window.onscroll = function() {navFunction()};
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
    });

    $(this).css("z-index", "2");
    
    $(".framed-text--" + number).css("display", "none");
    imgClicked = false;

  } else {

    if (number === 2 || number === 4) {
      $(this).animate({
        width: '100px',
        height: 'auto'
      });
    } else {
    $(this).animate({
      width: '200%',
    });
  }

  $(this).css("z-index", "98");

  $(".framed-text--" + number).css("display", "block");
  imgClicked = true;
  }

};


$(document).on("click", ".framed-img", imgOnClick);


