$(window).on("load", function () {
  $(".lds-facebook").fadeOut(2000, function () {
    $(this)
      .parent()
      .fadeOut(2000, function () {
        $("body").css("overflow", "auto");
        $("body").css("overflow-x", "hidden");
        $(this).remove();
      });
  });
});

$(document).ready(function () {
  $(".navbar-nav>li>a").on("click", function () {
    $(".navbar-collapse").collapse("hide");
  });

  $(".portofolio-filter").on("click", "li", function () {
    var filterValue = $(this).attr("data-filter");
    $grid.isotope({ filter: filterValue });
  });

  $(".grid").magnificPopup({
    delegate: ".popup",
    type: "image",
    gallery: {
      enabled: true,
    },
  });
  // $('.grid').magnificPopup({
  //     type: 'image',
  //     closeOnContentClick: true,
  //     mainClass: '.popup',
  //     image: {
  //         verticalFit: true
  //     }

  // });
  var owl = $("#owl-demo");

  owl.owlCarousel({
    autoplay: true,
    loop: true,
    items: 5,
    center: true,
    rtl: true,
    nav: true,
    dots: false,
    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
        margin: 30,
        stagePadding: 6,
      },
      481: {
        items: 3,
        margin: 30,
        stagePadding: 6,
      },
      768: {
        items: 3,
        margin: 20,
      },
      992: {
        items: 5,
        margin: 20,
        width: 240,
      },
    },
    // itemsMobile disabled - inherit from itemsTablet option
  });

  var owl2 = $("#owl2");

  owl2.owlCarousel({
    autoplay: true,
    loop: true,
    items: 6,
    rtl: true,
    stagePadding: 40,
    nav: true,
    dots: false,
    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
        margin: 20,
        stagePadding: 10,
      },
      481: {
        items: 1,
        margin: 20,
        stagePadding: 10,
      },
      768: {
        items: 2,
        margin: 20,
        stagePadding: 10,
      },
      992: {
        items: 2,
        margin: 50,
        width: 240,
      },
    },
    // itemsMobile disabled - inherit from itemsTablet option
  });

  var owl = $("#owl-demo4");

  owl.owlCarousel({
    autoplay: true,
    items: 5, //10 items above 1000px browser width
    loop: true,
    dots: false,
    center: true,
    nav: true,
    smartSpeed: 2000,
    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
      },
      481: {
        items: 1,
      },
      767: {
        items: 1,
      },
      991: {
        items: 1,
        loop: true,
      },
      1200: {
        items: 1,
        loop: true,
      },
    },
    // itemsMobile disabled - inherit from itemsTablet option
  });
  var owl = $("#owl-demo5");

  owl.owlCarousel({
    autoplay: true,
    items: 5, //10 items above 1000px browser width
    loop: true,
    dots: false,
    center: true,
    nav: true,
    smartSpeed: 2000,
    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
      },
      481: {
        items: 1,
      },
      767: {
        items: 1,
      },

      991: {
        items: 1,
        loop: true,
      },
      1200: {
        items: 1,
        loop: true,
      },
    },
    // itemsMobile disabled - inherit from itemsTablet option
  });
  var selector = ".portofolio-filter li";

  $(selector).on("click", function () {
    $(selector).removeClass("active");
    $(this).addClass("active");
  });
  /* Act on the event */
});

$(window).scroll(function () {
  console.log($(this).scrollTop());

  if ($(this).scrollTop() >= 100) {
    $(".logo-white").css("display", "block");
    $(".logo-dark").css("display", "none");
  } else {
    $(".logo-dark").css("display", "block");
    $(".logo-white").css("display", "none");
  }
});
