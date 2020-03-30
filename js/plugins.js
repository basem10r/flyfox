$(window).on("load", function() {
  $(".lds-facebook").fadeOut(2000, function() {
    $(this)
      .parent()
      .fadeOut(2000, function() {
        $("body").css("overflow", "auto");
        $("body").css("overflow-x", "hidden");
        $(this).remove();
      });
  });
});

$(document).ready(function() {
  $(document).on("click touchend", function() {
    $(".dropdown-toggle").removeClass("open");
  });

  var $grid = $(".grid").isotope({
    // options
  });

  $(".portofolio-filter").on("click", "li", function() {
    var filterValue = $(this).attr("data-filter");
    $grid.isotope({ filter: filterValue });
  });
  $(".grid").magnificPopup({
    delegate: ".popup",
    type: "image",
    gallery: {
      enabled: true
    }
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
        stagePadding: 6
      },
      481: {
        items: 3,
        margin: 30,
        stagePadding: 6
      },
      768: {
        items: 3,
        margin: 20
      },
      992: {
        items: 5,
        margin: 20,
        width: 240
      }
    }
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
        stagePadding: 10
      },
      481: {
        items: 1,
        margin: 20,
        stagePadding: 10
      },
      768: {
        items: 2,
        margin: 20,
        stagePadding: 10
      },
      992: {
        items: 2,
        margin: 50,
        width: 240
      }
    }
    // itemsMobile disabled - inherit from itemsTablet option
  });

  $(".timer").countTo();

  $(window).scroll(function() {
    console.log($(this).scrollTop());
    if ($(this).scrollTop() >= 500) {
      $(".logo-white").css("display", "block");
      $(".logo-dark").css("display", "none");
    } else {
      $(".logo-dark").css("display", "block");
      $(".logo-white").css("display", "none");
    }
    /* Act on the event */
  });
});
