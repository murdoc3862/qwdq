// - ====================
// - aurinko: ajax
// - ---------------------
// - ajax
// - ====================
$(function () {
    $('.js-ajax form').on('submit', function () {
        e.preventDefault();

        var $form = $(this);
        $.post($form.attr('action'), $form.serialize()).then(function () {
            $form[0].reset();
            $form.find('input').removeClass('correct');
            $form.find('[type="submit"]').blur();
        });
    });

});
