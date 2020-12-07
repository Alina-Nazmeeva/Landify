$(document).on("ready", () => {
    new WOW().init();
    $(".slider-wrapper").slick({
        slidesPerRow: 3,
        slidesPerScroll: 3,
        slidesToShow: 3,
        centerMode: true,
        centerPadding: "100px",
        dots: true,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                centerPadding: "40px",
                infinite: true,
                dots: true
              }
            }
        ]
    });
});