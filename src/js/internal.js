(function() {

  function documentReady() {

    @@include('partials/reviews-slider.js');
    @@include('partials/header-menu.js');
    @@include('partials/header-burger.js');
    @@include('partials/dropdown.js');
    @@include('partials/highlight.js');
    @@include('partials/select.js');
    @@include('partials/accordion.js');
    @@include('partials/validate.js');
    @@include('partials/ajax.js');
    @@include('partials/calc.js');
    @@include('partials/beacon.js');
  };

  document.addEventListener("DOMContentLoaded", documentReady);

})();