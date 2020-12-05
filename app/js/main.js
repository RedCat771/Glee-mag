$(function () {
  $(".star").rateYo({
    starWidth: "11px",
    normalFill: "#d6d6d6",
    ratedFill: "#ffcc00",
    readOnly: true,
  });

  $(".product__star").rateYo({
    starWidth: "16px",
    normalFill: "#d6d6d6",
    ratedFill: "#ffcc00",
    readOnly: true,
    spacing: "13px"
  });

 $(".filter-price__input").ionRangeSlider({
   type: "double",
   step:"0.01",
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
  });

  var mixer = mixitup(".products__body");
  var mixer = mixitup(".design__body");
});