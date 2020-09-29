// - ====================
// - aurinko: accordion
// - 30-07-2020: sashakasha
// - ---------------------
// - Accordion
// - ====================
$(function () {

    var isFirsrActive = function ($this) {
        var result = $this.hasClass('js-first-open') ?0:false;
        return result;
    };

    var allOpen = function () {
        $('.js-all-open').find('.group').addClass('active');
        $('.js-all-open').find('.content').show();
        $('.js-all-open .js-accordion').accordion('disable');
    };

    var mobileOpen = function () {
        if (window.innerWidth < 1280) {
            $('.js-mobile-open').find('.group').addClass('active');
            $('.js-mobile-open').find('.content').show();
            $('.js-mobile-open .js-accordion').accordion('disable');
        } else {
            $('.js-mobile-open').find('.group').removeClass('active');
            $('.js-mobile-open').find('.content').hide();
            $('.js-mobile-open .js-accordion').accordion('enable');
            $('.js-mobile-open .js-accordion').each(function () {
                var $this = $(this);
                $this.accordion('option', 'active', 1);// magic
                $this.accordion('option', 'active', isFirsrActive($this));
            });
        }
    };


    $('.js-accordion').each(function () {
        var $this = $(this);
        var active = isFirsrActive($this);
        $this.accordion({
            active: active,
            collapsible: true,
            header: '.header',
            heightStyle: 'content',
            icons: false,
            beforeActivate: function (event, ui) {
                setTimeout(function () {
                    var $akk = $('.ui-state-active');
                    $('.group').removeClass('active');
                    if ($akk.length) {
                        $akk.parents('.group').addClass('active');
                    }
                });
            },
            create: function () {
                mobileOpen();
                allOpen();
            }
        });

    });


    $(window).on('resize', function () {
        mobileOpen();
    });

});
