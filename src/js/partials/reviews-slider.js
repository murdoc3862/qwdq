// - ====================
// - aurinko: reviews-slider
// - 08-04-2020: sashakasha
// - ---------------------
// - Reviews-slider
// - ====================

(function () {
    if ($('.js-reviews-slider').length > 0) {

        $('.js-reviews-slider').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: true,
            prevArrow: '<div class="slick-prev"><i class="b-icon b-icon--slider icon-toggle"></i></div>',
            nextArrow: '<div class="slick-next"><i class="b-icon b-icon--slider icon-toggle"></i></div>',
            dots: false,
            infinite: false,
            rows: 0
        });
    }
})();
