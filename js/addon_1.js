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

  var AimaasGlobal = function ($scope, $) {
    if ($scope.hasClass("aimaas-sticky-yes")) {
      var current_widget = $scope;
      current_widget.wrap('<div class="sticky-wrapper"></div>');
      var headerHeight = $(current_widget).parent(".sticky-wrapper").height(),
        stickyWrapper = $(current_widget).parent(".sticky-wrapper");
      stickyWrapper.css("height", headerHeight + "px");
      window.onscroll = function () {
        scrollFunction();
      };

      function scrollFunction() {
        if (
          document.body.scrollTop > 50 ||
          document.documentElement.scrollTop > 50
        ) {
          if ($scope.hasClass("aimaas-sticky-yes")) {
            stickyWrapper.addClass("is-sticky");
          }
        } else {
          if ($scope.hasClass("aimaas-sticky-yes")) {
            stickyWrapper.removeClass("is-sticky");
          }
        }
        if (
          document.body.scrollTop > 300 ||
          document.documentElement.scrollTop > 300
        ) {
          if ($scope.hasClass("aimaas-sticky-yes")) {
            $scope.addClass("reveal-sticky");
          }
        } else {
          if ($scope.hasClass("aimaas-sticky-yes")) {
            $scope.removeClass("reveal-sticky");
          }
        }
      }
    }
  };

  var AimaasductCategories = function () {
    if ($.fn.isotope) {
      var $gridMas = $(".product-categories-wrap.masonry");

      $gridMas.isotope({
        itemSelector: ".aimaas-product-cat-wrap",
        percentPosition: true,
        layoutMode: "packery",
      });

      $gridMas.imagesLoaded().progress(function () {
        $gridMas.isotope();
      });
    }
  };

  var AimaasPostLoop = function () {
    if ($.fn.isotope) {
      $(".aimaas-post-widget-area.masonry").isotope({
        itemSelector: ".aimaas-post-widget-area.masonry>div",
        percentPosition: true,
        layoutMode: "packery",
      });
    }
  };

  //portfolio gallery js start
  var Aimaas_Portfolio_Gallery_Js = function ($scope, $) {
    if ($.fn.isotope) {
      var gridMas = $(".aimaas-pf-gallery-wrap.layout-mode-masonry");

      gridMas
        .isotope({
          itemSelector: ".aimaas-pf-gallery-wrap .aimaas-portfolio-item-wrap",
          percentPosition: true,
          layoutMode: "packery",
        })
        .resize();

      gridMas.imagesLoaded().progress(function () {
        gridMas.isotope();
      });
    }

    if ($(".aimaas-pf-gallery-slider").length > 0) {
      var wrapper = $scope.find(".aimaas-pf-gallery-slider");
      if (wrapper.length === 0) return;
      var settings = wrapper.data("settings");

      wrapper.slick({
        infinite: settings["loop"],
        speed: 900,
        slidesToShow: settings["per_coulmn"],
        slidesToScroll: 1,
        autoplay: settings["autoplay"],
        autoplaySpeed: settings["autoplaytimeout"],
        arrows: settings["nav"],
        prevArrow:
          '<button type="button" class="aimaas-slick-prev">' +
          settings.prev_icon +
          "</button>",
        nextArrow:
          '<button type="button" class="aimaas-slick-next">' +
          settings.next_icon +
          "</button>",
        draggable: settings["mousedrag"],
        dots: settings["dots"],
        lazyLoad: "ondemand",
        dotsClass: "aimaas-pf-gallery-slider-dots",
        responsive: [
          {
            breakpoint: 991,
            settings: {
              slidesToShow: settings["per_coulmn_tablet"],
            },
          },
          {
            breakpoint: 450,
            settings: {
              slidesToShow: settings["per_coulmn_mobile"],
            },
          },
        ],
      });
    }
  };

  var Aimaas_Team_Js = function ($scope, $) {
    var wrapper = $scope.find(".team-slider");
    if (wrapper.length === 0) return;
    var settings = wrapper.data("settings");
    wrapper.slick({
      infinite: true,
      speed: 900,
      slidesToShow: settings["per_coulmn"],
      slidesToScroll: 1,
      autoplay: settings["autoplay"],
      autoplaySpeed: settings["autoplaytimeout"],
      arrows: settings["nav"],
      draggable: settings["mousedrag"],
      dots: settings["dots"],
      lazyLoad: "ondemand",
      dotsClass: "team-slider-dot-list",
      swipe: true,
      appendArrows: ".team-slider-arrow",
      prevArrow: $(".prev"),
      nextArrow: $(".next"),
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

    $(document).ready(function () {
      $(".team-slider-arrow button").click(function () {
        $(".team-slider-arrow button").removeClass("slick-active");
        $(this).addClass("slick-active");
      });
    });
  };

  var Aimaas_Testimonial_Js = function ($scope, $) {
    var wrapper = $scope.find(".testimonial-slider");
    if (wrapper.length === 0) return;
    var settings = wrapper.data("settings");
    wrapper.slick({
      infinite: true,
      speed: 900,
      slidesToShow: settings["per_coulmn"],
      slidesToScroll: 1,
      autoplay: settings["autoplay"],
      autoplaySpeed: settings["autoplaytimeout"],
      arrows: settings["nav"],
      draggable: settings["mousedrag"],
      dots: settings["dots"],
      lazyLoad: "ondemand",
      centerMode: settings["show_center_mode"],
      dotsClass: "testimonial-slider-dot-list",
      swipe: true,
      vertical: settings["show_vertical"],
      appendArrows: ".team-slider-arrow",
      prevArrow: $(".prev"),
      nextArrow: $(".next"),
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
            vertical: false,
          },
        },
      ],
    });
  };

  //portfolio js start
  var Aimaas_Portfolio_Js = function ($scope, $) {
    if ($.fn.isotope) {
      var $gridMas = $(".aimaas-portfolio-wrap.layout-mode-masonry");
      var $grid = $(
        ".aimaas-portfolio-wrap.layout-mode-normal.enable-filter-yes"
      );

      $grid
        .isotope({
          itemSelector: ".aimaas-portfolio-item-wrap",
          percentPosition: true,
          layoutMode: "fitRows",
        })
        .resize();

      $grid
        .imagesLoaded()
        .progress(function () {
          $grid.isotope("layout");
        })
        .resize();

      $gridMas.isotope({
        itemSelector: ".aimaas-portfolio-item-wrap",
        percentPosition: true,
        layoutMode: "packery",
      });

      $gridMas.imagesLoaded().progress(function () {
        $gridMas.isotope("layout");
      });

      $grid.isotope().resize();
      $gridMas.isotope().resize();

      $(".pf-isotope-nav li").on("click", function () {
        $(".pf-isotope-nav li").removeClass("active");
        $(this).addClass("active");

        var selector = $(this).attr("data-filter");
        $gridMas.isotope({
          filter: selector,
          animationOptions: {
            duration: 750,
            easing: "linear",
            queue: false,
          },
        });

        var selector = $(this).attr("data-filter");
        $grid.isotope({
          filter: selector,
          animationOptions: {
            duration: 750,
            easing: "linear",
            queue: false,
          },
        });
      });
    }

    //Portfolio slider

    var wrapper = $scope.find(".portfolio-slider");
    if (wrapper.length === 0) return;
    var settings = wrapper.data("settings");
    wrapper.slick({
      infinite: true,
      speed: 900,
      slidesToShow: settings["per_coulmn"],
      slidesToScroll: 1,
      autoplay: settings["autoplay"],
      autoplaySpeed: settings["autoplaytimeout"],
      arrows: settings["nav"],
      draggable: settings["mousedrag"],
      dots: settings["dots"],
      lazyLoad: "ondemand",
      dotsClass: "portfolio-slider-dot-list",
      swipe: true,
      appendArrows: ".portfolio-slider-arrow",
      prevArrow: $(".prev"),
      nextArrow: $(".next"),
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

    // comment load more button click event
    $(".aimaas-pf-loadmore-btn").on("click", function () {
      var button = $(this);

      // decrease the current comment page value
      var dpaged = button.data("paged"),
        total_pages = button.data("total-page"),
        nonce = button.data("referrar"),
        ajaxurl = button.data("url");

      dpaged++;
      $.ajax({
        url: ajaxurl, // AJAX handler, declared before
        dataType: "html",
        data: {
          action: "aimaas_loadmore_callback", // wp_ajax_cloadmore
          // 'post_id': foio_portfolio_js_datas.parent_post_id, // the current post
          paged: dpaged, // current comment page
          folio_nonce: nonce,
          portfolio_settings: button.data("portfolio-settings"),
        },
        type: "POST",
        beforeSend: function (xhr) {
          button.text("Loading..."); // preloader here
        },
        success: function (data) {
          if (data) {
            $(".aimaas-portfolio-wrap").append(data);
            $(".aimaas-portfolio-wrap").isotope("reloadItems").isotope();
            button.text("More projects");
            button.data("paged", dpaged);
            // if the last page, remove the button
            if (total_pages == dpaged) button.remove();
          } else {
            button.remove();
          }
        },
      });
      return false;
    });

    $(".popup-icon").magnificPopup({
      type: "image",
      gallery: {
        enabled: true,
      },
    });
  };

  //Job js start
  var Aimaas_Job_Js = function () {
    if ($.fn.isotope) {
      var $gridMas = $(".aimaas-job-wrap.layout-mode-masonry");
      var $grid = $(".aimaas-job-wrap.layout-mode-normal");

      $grid
        .isotope({
          itemSelector: ".aimaas-job-item-wrap",
          percentPosition: true,
        })
        .resize();

      $grid
        .imagesLoaded()
        .progress(function () {
          $grid.isotope("layout");
        })
        .resize();

      $gridMas.isotope({
        itemSelector: ".aimaas-job-item-wrap",
        percentPosition: true,
      });

      $gridMas.imagesLoaded().progress(function () {
        $gridMas.isotope("layout");
      });

      $grid.isotope().resize();
      $gridMas.isotope().resize();

      $(".jf-isotope-nav li").on("click", function () {
        $(".jf-isotope-nav li").removeClass("active");
        $(this).addClass("active");

        var selector = $(this).attr("data-filter");
        $gridMas.isotope({
          filter: selector,
          animationOptions: {
            duration: 750,
            easing: "linear",
            queue: false,
          },
        });

        var selector = $(this).attr("data-filter");
        $grid.isotope({
          filter: selector,
          animationOptions: {
            duration: 750,
            easing: "linear",
            queue: false,
          },
        });
      });
    }

    // comment load more button click event
    $(".aimaas-jf-loadmore-btn").on("click", function () {
      var button = $(this);

      // decrease the current comment page value
      var dpaged = button.data("paged"),
        total_pages = button.data("total-page"),
        nonce = button.data("referrar"),
        ajaxurl = button.data("url");

      dpaged++;
      $.ajax({
        url: ajaxurl, // AJAX handler, declared before
        dataType: "html",
        data: {
          action: "aimaas_loadmore_callback", // wp_ajax_cloadmore
          // 'post_id': foio_job_js_datas.parent_post_id, // the current post
          paged: dpaged, // current comment page
          folio_nonce: nonce,
          job_settings: button.data("job-settings"),
        },
        type: "POST",
        beforeSend: function (xhr) {
          button.text("Loading..."); // preloader here
        },
        success: function (data) {
          if (data) {
            $(".aimaas-job-wrap").append(data);
            $(".aimaas-job-wrap").isotope("reloadItems").isotope();
            button.text("More projects");
            button.data("paged", dpaged);
            // if the last page, remove the button
            if (total_pages == dpaged) button.remove();
          } else {
            button.remove();
          }
        },
      });
      return false;
    });
  };

  var AimaasTeam = function ($scope, $) {
    var postwrapper = $scope.find(".aimaas--team");
    if (postwrapper.length === 0) return;

    var settings = postwrapper.data("settings");

    /*--------------------------------------------------------------
        aimaas slider js
        --------------------------------------------------------------*/
    var postwrapper = $(".aimaas--team"),
      rtl = $("body").hasClass("rtl") ? true : false;

    postwrapper.owlCarousel({
      rtl: rtl,
      stagePadding: 200,
      dots: settings["dots"],
      loop: settings["loop"],
      center: true,
      autoplay: settings["autoplay"],
      nav: settings["nav"],
      mouseDrag: settings["mousedrag"],
      autoplaytimeout: settings["autoplaytimeout"],
      items: settings["per_coulmn"],
      navText: [settings.prev_icon, settings.next_icon],
      responsive: {
        0: {
          items: settings["per_coulmn_mobile"],
          mouseDrag: settings["mousedrag"],
          stagePadding: 0,
        },
        768: {
          items: settings["per_coulmn_tablet"],
          mouseDrag: settings["mousedrag"],
          stagePadding: 0,
        },
        1025: {
          items: settings["per_coulmn"],
          mouseDrag: settings["mousedrag"],
          stagePadding: 100,
        },

        1400: {
          items: settings["per_coulmn"],
          mouseDrag: settings["mousedrag"],
          stagePadding: 200,
        },
      },
    });
  };

  var Aimaas_Back_To_Top = function ($scope, $) {
    /*--------------------------------------------------------------
        aimaas slider js
        --------------------------------------------------------------*/

    jQuery(".aimaas-back-to-top-wraper").click(function () {
      jQuery("html, body").animate(
        {
          scrollTop: 0,
        },
        1000
      );
    });

    function stickyHeader($class) {
      jQuery(window).on("scroll", function () {
        var headerHeight = 600;
        if (jQuery(window).scrollTop() >= headerHeight) {
          jQuery(".aimaas-back-to-top-wraper .aimaas-icon").addClass(
            "sticky-active"
          );
        } else {
          jQuery(".aimaas-back-to-top-wraper .aimaas-icon").removeClass(
            "sticky-active"
          );
        }
      });
    }

    stickyHeader(".aimaas-back-to-top-wraper");
  };

  var navMenu = function ($scope, $) {
    $(".aimaas-mega-menu")
      .closest(".elementor-container")
      .addClass("megamenu-full-container");
    var count = 0;
    $(".main-navigation ul.navbar-nav>li.aimaas-mega-menu>.sub-menu>li").each(
      function (index) {
        count++;
        if ($(this).is("li:last-child")) {
          $(this)
            .parent()
            .addClass("mg-column-" + count);
          count = 0;
        }
      }
    );

    $(".main-navigation ul.navbar-nav>li").each(function (i, v) {
      $(v).find("a").contents().wrap('<span class="menu-item-text"/>');
    });
    $(".menu-item-has-children > a").append(
      '<span class="dropdownToggle"><i class="fas fa-angle-down"></i></span>'
    );

    function navMenu() {
      if (jQuery(".aimaas-main-menu-wrap").hasClass("menu-style-inline")) {
        if (jQuery(window).width() < 1100) {
          jQuery(".aimaas-main-menu-wrap").addClass("menu-style-flyout");
          jQuery(".aimaas-main-menu-wrap").removeClass("menu-style-inline");
        } else {
          jQuery(".aimaas-main-menu-wrap").removeClass("menu-style-flyout");
          jQuery(".aimaas-main-menu-wrap").addClass("menu-style-inline");
        }

        $(window).resize(function () {
          if (jQuery(window).width() < 1100) {
            jQuery(".aimaas-main-menu-wrap").addClass("menu-style-flyout");
            jQuery(".aimaas-main-menu-wrap").removeClass("menu-style-inline");
          } else {
            jQuery(".aimaas-main-menu-wrap").removeClass("menu-style-flyout");
            jQuery(".aimaas-main-menu-wrap").addClass("menu-style-inline");
          }
        });
      }

      // main menu toggleer icon (Mobile site only)
      $('[data-toggle="navbarToggler"]').on("click", function (e) {
        $(".navbar").toggleClass("active");
        $(".navbar-toggler-icon").toggleClass("active");
        $("body").toggleClass("offcanvas--open");
        e.stopPropagation();
        e.preventDefault();
      });
      $(".navbar-inner").on("click", function (e) {
        e.stopPropagation();
      });

      // Remove class when click on body
      $("body").on("click", function () {
        $(".navbar").removeClass("active");
        $(".navbar-toggler-icon").removeClass("active");
        $("body").removeClass("offcanvas--open");
      });
      $(".main-navigation ul.navbar-nav li.menu-item-has-children>a").on(
        "click",
        function (e) {
          e.preventDefault();
          $(this).siblings(".sub-menu").toggle();
          $(this).parent("li").toggleClass("dropdown-active");
        }
      );
    }

    navMenu();
  };

  //Portfolio slider

  $(window).on("elementor/frontend/init", function () {
    elementorFrontend.hooks.addAction(
      "frontend/element_ready/aimaas-portfolio-gallery.default",
      Aimaas_Portfolio_Gallery_Js
    );
    elementorFrontend.hooks.addAction(
      "frontend/element_ready/aimaas-product-categories.default",
      AimaasductCategories
    );
    elementorFrontend.hooks.addAction(
      "frontend/element_ready/blog-loop.default",
      AimaasPostLoop
    );
    elementorFrontend.hooks.addAction(
      "frontend/element_ready/aimaas-testimonial-loop.default",
      Aimaas_Testimonial_Js
    );
    elementorFrontend.hooks.addAction(
      "frontend/element_ready/aimaas_team.default",
      AimaasTeam
    );
    elementorFrontend.hooks.addAction(
      "frontend/element_ready/aimaas-back-to-top.default",
      Aimaas_Back_To_Top
    );
    elementorFrontend.hooks.addAction(
      "frontend/element_ready/aimaas-portfolio.default",
      Aimaas_Portfolio_Js
    );
    elementorFrontend.hooks.addAction(
      "frontend/element_ready/aimaas-job.default",
      Aimaas_Job_Js
    );
    elementorFrontend.hooks.addAction(
      "frontend/element_ready/aimaas-main-menu.default",
      navMenu
    );
    elementorFrontend.hooks.addAction(
      "frontend/element_ready/aimaas_team.default",
      Aimaas_Team_Js
    );
    elementorFrontend.hooks.addAction(
      "frontend/element_ready/global",
      AimaasGlobal
    );
  });
})(jQuery);
