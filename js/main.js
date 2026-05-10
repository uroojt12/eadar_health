/*========== Toggle ==========*/
$(document).ready(function () {
  // Toggle button click event
  $(document).on("click", ".toggle", function () {
    console.log("Toggle Clicked"); // Debugging statement
    $(".toggle").toggleClass("active");
    $("body").toggleClass("flow");
    $("[nav]").toggleClass("active");
    $(".upperlay").toggleClass("active");
  });

  // Smooth scrolling for anchor links
  $(document).on("click", "[nav] a", function (e) {
    var targetId = $(this).attr("href");

    if (targetId.startsWith("#")) {
      e.preventDefault();

      // Close mobile menu if open
      $(".toggle").removeClass("active");
      $("body").removeClass("flow");
      $("[nav]").removeClass("active");
      $(".upperlay").removeClass("active");

      // Scroll to the target section
      $("html, body").animate(
        {
          scrollTop: $(targetId).offset().top,
        },
        800
      );
    }
  });
});
// =================scroll===========
let offset = 0;
$(function () {
  // header fix
  offSet = $("body").offset().top;
  offSet = offSet + 5;
  $(window).scroll(function () {
    scrollPos = $(window).scrollTop();
    if (scrollPos >= offSet) {
      $("header").addClass("fix");
    } else {
      $("header").removeClass("fix");
    }
  });
});
// =====
$(window).on("load", function () {
  // AOS Js
  AOS.init({
    easing: "ease-in-out-sine",
    offset: 10,
    disable: window.innerWidth <= 991,
  });
});
// _____popup_____*/
$(document).on("click", ".popBtn", function () {
  var popUp = $(this).data("popup");
  $("body").addClass("flow");
  $(".popup[data-popup= " + popUp + "]").fadeIn();
});
$(document).on("click", ".crosBtn", function () {
  $(".popup").fadeOut();
  $("body").removeClass("flow");
});

//
/*____ FAQ's ____*/
$(document).on("click", ".faqBlk > h5", function () {
  $(".faqBlk")
    .not($(this).parent().toggleClass("active"))
    .removeClass("active");
  $(".faqBlk > .txt")
    .not($(this).parent().children(".txt").slideToggle())
    .slideUp();
});

$(document).on("click", "[nav] a", function (e) {
  // Check if it's a link with a hash
  if (this.hash !== "") {
    e.preventDefault(); // Prevent the default behavior of the link

    // Get the target section
    var targetSection = $(this.hash);

    // Check if the target section is on the current page
    if (targetSection.length) {
      // Scroll to the target section
      $("html, body").animate(
        {
          scrollTop: targetSection.offset().top,
        },
        800
      );
    } else {
      // If the target section is not on the current page, navigate to the link's href
      window.location.href = this.href;
    }
  }
});

// money=============
$(".testi-carousel").owlCarousel({
  autoplay: true,
  nav: true,
  navText: [
    '<i class="fa fa-long-arrow-left"></i>',
    '<i class="fa fa-long-arrow-right"></i>',
  ],
  // navText: [ 'prev', 'next' ],
  dots: false,
  loop: true,
  autoWidth: false,
  autoHeight: true,
  smartSpeed: 1000,
  autoplayTimeout: 10000,
  margin: 20,
  autoplayHoverPause: true,
  responsive: {
    0: {
      items: 1,
      autoplay: true,
      autoHeight: true,
      dots: false,
      nav: true,
    },
    600: {
      items: 1,
    },
    991: {
      items: 1,
    },
    1000: {
      items: 1,
    },
  },
});

// banner=============
$(".banner-carousel").owlCarousel({
  autoplay: true,
  nav: false,
  navText: [
    '<i class="fa-solid fa-circle-chevron-left"></i>',
    '<i class="fa-solid fa-circle-chevron-right"></i>',
  ],
  // navText: [ 'prev', 'next' ],
  dots: true,
  loop: true,
  autoWidth: false,
  autoHeight: true,
  smartSpeed: 1000,
  autoplayTimeout: 10000,
  margin: 20,
  autoplayHoverPause: true,
  responsive: {
    0: {
      items: 1,
      autoplay: true,
      autoHeight: true,
      dots: true,
      nav: false,
    },
    600: {
      items: 1,
    },
    991: {
      items: 1,
    },
    1000: {
      items: 1,
    },
  },
});

// ======upload=====
$(document).ready(function () {
  // upload file
  var imgFile;
  $(document).on("click", ".uploadImg", function () {
    $(this).parents("form").find(".uploadFile").trigger("click");
  });
});
// =====
$(".slider-for").slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  fade: true,
  asNavFor: ".slider-nav",
});
$(".slider-nav").slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  asNavFor: ".slider-for",
  dots: true,
  centerMode: true,
  focusOnSelect: true,
});
// light gallery
$(".imgGallery").lightGallery({
  thumbnail: true,
  // startClass: 'lg-start-zoom'
});
