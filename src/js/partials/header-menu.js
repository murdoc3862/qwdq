/* eslint-disable no-console */
// - ====================
// - aurinko: header-menu
// - 27-05-2020: Malich
// - ---------------------
// - Фиксирование меню при скролле
// - ====================

(function () {
    var $header = $('.js-header');
    var $scroll = $('.js-scroll-wrapper');
    var $main = $('.js-main');
    var $navbar = $('.b-navbar');
    var fixed = 'sticky';
    var scrollTop = 0;
    var lastScrollTop = 0;
    var trasition = 'all 0.2s ease-in-out 0s';

    function headerHide() {
        $header.css({
            transform: 'translate3d(0px, -100%, 0px)',
            boxShadow: 'none'
        });
        $navbar.css({
            'margin-top': '0px',
            'transition': 'all 0.2s ease-in-out 0s'
        });
    }

    function headerShow() {
        $header.css({
            transform: 'translate3d(0px, 0px, 0px)',
            boxShadow: '0 3px 30px rgba(0, 0, 0, .1)'
        });
        $navbar.css({
            'margin-top': ''
        });
        $header.addClass('white');
        if ($scroll.scrollTop()===0) {
            $header.css({'box-shadow': 'none'}).removeClass('white');
        }
    }

    if ($header.length && $scroll.length && $main.length) {
        $header.addClass(fixed);
        $main.css('margin-top', $header.height());
        $header.css({
            transition: trasition
        });

        $scroll.on('scroll', function () {
            scrollTop = $scroll.scrollTop();

            if (scrollTop > $header.height()) {

                if (scrollTop > lastScrollTop) {
                    headerHide();
                } else {
                    headerShow();
                }
            } else {
                headerShow();
            }


            lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
        });

        $(window).resize(function () {
            $main.css('margin-top', $header.height());
        });
    }

    $('.b-navbar__title-link').on('click', function () {
        $('.b-navbar, .b-navbar__collapsed-wrapper').toggleClass('open');
    });
})();
