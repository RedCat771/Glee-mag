$(function () {
  // $(".add-menu__search").on("click", function () {
  //   $(".add-menu__search").toggleClass("add-menu__search--open");
  //   $(".add-menu__input").on("click", function () {
  //     $(this).preventDefault();
  //   });
  // });

  $(".add-menu__btn").on("click", function () {
    $(".nav__list").toggleClass("nav__list--active");
  });

  $(".related__slides").slick({
    slidesToShow: 4,
    infinite: true,
    dots: false,
    arrows: true,
    draggable: true,
  });

  $(".details__tab").on("click", function (e) {
    e.preventDefault();
    $(".details__tab").removeClass("details__tab--active");
    $(this).addClass("details__tab--active");

    $(".details__description").removeClass("details__description--active");
    $($(this).attr("href")).addClass("details__description--active");
  });

  $(".details__slide").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: ".details__column",
    draggable: false,
  });
  $(".details__column").slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    asNavFor: ".details__slide",
    dots: false,
    centerMode: true,
    focusOnSelect: true,
    vertical: true,
    draggable: false,
  });

  $(".star").rateYo({
    starWidth: "11px",
    normalFill: "#d6d6d6",
    ratedFill: "#ffcc00",
    readOnly: true,
    starSvg:
      "<svg width='18pt' height='18pt' viewBox='0 0 18 18' version='1.1'>" +
      "<path d='M 17.945312 6.902344 C 17.828125 6.539062 17.503906 6.277344 17.121094 6.246094 L 11.929688 5.773438 L 9.875 0.964844 C 9.722656 0.613281 9.378906 0.386719 8.996094 0.386719 C 8.613281 0.386719 8.269531 0.613281 8.117188 0.96875 L 6.0625 5.773438 L 0.871094 6.246094 C 0.488281 6.28125 0.164062 6.539062 0.046875 6.902344 C -0.0703125 7.265625 0.0390625 7.664062 0.328125 7.917969 L 4.253906 11.359375 L 3.09375 16.460938 C 3.011719 16.835938 3.15625 17.222656 3.464844 17.445312 C 3.632812 17.566406 3.828125 17.628906 4.027344 17.628906 C 4.195312 17.628906 4.367188 17.582031 4.515625 17.492188 L 8.996094 14.816406 L 13.476562 17.492188 C 13.800781 17.691406 14.214844 17.671875 14.527344 17.445312 C 14.835938 17.222656 14.980469 16.832031 14.898438 16.460938 L 13.738281 11.359375 L 17.664062 7.917969 C 17.953125 7.664062 18.066406 7.265625 17.945312 6.902344 Z M 17.945312 6.902344'></path>" +
      "</svg>",
  });

  $(".details__star").rateYo({
    starWidth: "18px",
    normalFill: "#d6d6d6",
    ratedFill: "#ffcc00",
    readOnly: true,
    spacing: "13px",
    starSvg:
      "<svg width='18pt' height='18pt' viewBox='0 0 18 18' version='1.1'>" +
      "<path d='M 17.945312 6.902344 C 17.828125 6.539062 17.503906 6.277344 17.121094 6.246094 L 11.929688 5.773438 L 9.875 0.964844 C 9.722656 0.613281 9.378906 0.386719 8.996094 0.386719 C 8.613281 0.386719 8.269531 0.613281 8.117188 0.96875 L 6.0625 5.773438 L 0.871094 6.246094 C 0.488281 6.28125 0.164062 6.539062 0.046875 6.902344 C -0.0703125 7.265625 0.0390625 7.664062 0.328125 7.917969 L 4.253906 11.359375 L 3.09375 16.460938 C 3.011719 16.835938 3.15625 17.222656 3.464844 17.445312 C 3.632812 17.566406 3.828125 17.628906 4.027344 17.628906 C 4.195312 17.628906 4.367188 17.582031 4.515625 17.492188 L 8.996094 14.816406 L 13.476562 17.492188 C 13.800781 17.691406 14.214844 17.671875 14.527344 17.445312 C 14.835938 17.222656 14.980469 16.832031 14.898438 16.460938 L 13.738281 11.359375 L 17.664062 7.917969 C 17.953125 7.664062 18.066406 7.265625 17.945312 6.902344 Z M 17.945312 6.902344'></path>" +
      "</svg>",
  });

  $(".product__star").rateYo({
    starWidth: "16px",
    normalFill: "#d6d6d6",
    ratedFill: "#ffcc00",
    readOnly: true,
    spacing: "13px",
    starSvg:
      "<svg width='18pt' height='18pt' viewBox='0 0 18 18' version='1.1'>" +
      "<path d='M 17.945312 6.902344 C 17.828125 6.539062 17.503906 6.277344 17.121094 6.246094 L 11.929688 5.773438 L 9.875 0.964844 C 9.722656 0.613281 9.378906 0.386719 8.996094 0.386719 C 8.613281 0.386719 8.269531 0.613281 8.117188 0.96875 L 6.0625 5.773438 L 0.871094 6.246094 C 0.488281 6.28125 0.164062 6.539062 0.046875 6.902344 C -0.0703125 7.265625 0.0390625 7.664062 0.328125 7.917969 L 4.253906 11.359375 L 3.09375 16.460938 C 3.011719 16.835938 3.15625 17.222656 3.464844 17.445312 C 3.632812 17.566406 3.828125 17.628906 4.027344 17.628906 C 4.195312 17.628906 4.367188 17.582031 4.515625 17.492188 L 8.996094 14.816406 L 13.476562 17.492188 C 13.800781 17.691406 14.214844 17.671875 14.527344 17.445312 C 14.835938 17.222656 14.980469 16.832031 14.898438 16.460938 L 13.738281 11.359375 L 17.664062 7.917969 C 17.953125 7.664062 18.066406 7.265625 17.945312 6.902344 Z M 17.945312 6.902344'></path>" +
      "</svg>",
  });

  $(".filter-price__input").ionRangeSlider({
    type: "double",
    step: "0.01",
    onStart: function (data) {
      $(".filter-price__from").text(data.from);
      $(".filter-price__to").text(data.to);
    },
    onChange: function (data) {
      $(".filter-price__from").text(data.from);
      $(".filter-price__to").text(data.to);
    },
  });

  $(".trend-slider").slick({
    arrows: false,
    dots: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          dots: false,
        },
      },
    ],
  });

  $(".details__input").styler();

  var mixer = mixitup(".products__body");
  var mixer = mixitup(".design__body");
});
