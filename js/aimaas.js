(function ($) {
  "use strict";

  /* ---------------------------------------------

  Navigation menu

  --------------------------------------------- */

  // dropdown for mobile
  /* is_exist() */
  jQuery.fn.is_exist = function () {
    return this.length;
  };

  $(window).load(function () {});

  var AimaasTextSlider = function ($scope, $) {
    var wrapper = $scope.find(".aimaas-text-slider");

    if (wrapper.length === 0) return;
    var settings = wrapper.data("settings");

    wrapper.slick({
      rtl: settings["slider_rtl"],
      infinite: true,
      slidesToShow: settings["per_coulmn"],
      slidesToScroll: settings["slide_scroll"],
      arrows: false,
      dots: false,
      autoplay: true,
      autoplaySpeed: 0,
      speed: 10000,
      cssEase: "linear",
      pauseOnHover: true,
      adaptiveHeight: true,
      responsive: [
        {
          breakpoint: 1600,
          settings: {
            slidesToShow: settings["per_coulmn"],
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 1025,
          settings: {
            slidesToShow: settings["per_coulmn_tablet"],
            slidesToScroll: 1,
          },
        },

        {
          breakpoint: 767,
          settings: {
            slidesToShow: settings["per_coulmn_mobile"],
            slidesToScroll: 1,
          },
        },
      ],
    });
  };

  // infinite slider

  var azzleInfiniteSlider = function ($scope, $) {
    var wrapper = $scope.find(".azzle-infinite-slider");
    if (wrapper.length === 0) return;
    var settings = wrapper.data("settings");
    wrapper = new Swiper(".azzle-infinite-slider", {
      spaceBetween: 0,
      centeredSlides: true,
      speed: 8000,
      autoplay: {
        delay: 0.5,
      },
      loop: true,
      slidesPerView: "auto",
      allowTouchMove: false,
      disableOnInteraction: true,
    });
  };

  // start nft slider one
  var AimaasTslider = function ($scope, $) {
    var wrapper = $scope.find(".aimaas-t-slider");
    if (wrapper.length === 0) return;
    var settings = wrapper.data("settings");
    wrapper.slick({
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      autoplay: settings["autoplay"],
      dots: settings["dots"],
    });
  };

  // start aimaas testimonial 2 column slider
  var AimaasTwoColumnSlider = function ($scope, $) {
    var wrapper = $scope.find(".aimaas-t-2column-slider");
    if (wrapper.length === 0) return;
    var settings = wrapper.data("settings");
    wrapper.slick({
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: settings["arrows"],
      dots: settings["dots"],
      autoplay: settings["autoplay"],
      prevArrow: $(".prev"),
      nextArrow: $(".next"),
    });
  };

  // all demos js init

  $(".menu-bar").on("click", function () {
    $(".aimaas-sidemenu-column, .offcanvas-overlay").addClass("active");
  });
  $(".aimaas-sidemenu-close, .offcanvas-overlay").on("click", function () {
    $(".aimaas-sidemenu-column, .offcanvas-overlay").removeClass("active");
  });

  $(window).on("elementor/frontend/init", function () {
    elementorFrontend.hooks.addAction(
      "frontend/element_ready/aimaas_text_slider_widget.default",
      AimaasTextSlider
    );
    elementorFrontend.hooks.addAction(
      "frontend/element_ready/Aimaas_T_slider.default",
      AimaasTslider
    );
    elementorFrontend.hooks.addAction(
      "frontend/element_ready/Aimaas_Two_Column_Slider.default",
      AimaasTwoColumnSlider
    );
    elementorFrontend.hooks.addAction(
      "frontend/element_ready/Azzle_Infinite_Slider.default",
      azzleInfiniteSlider
    );
  });
})(jQuery);
