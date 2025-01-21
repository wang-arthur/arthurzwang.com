$(document).ready(function() {
  var $nav = $('.simple-nav');
  var $navList = $nav.find('.simple-nav__list');
  var $navItems = $navList.children();

  function checkNavLayout() {
    var availableSpace = $nav.width();
    var requiredSpace = 0;

    $navItems.each(function() {
      requiredSpace += $(this).outerWidth(true);
    });

    if (requiredSpace > availableSpace) {
      $nav.addClass('vertical');
    } else {
      $nav.removeClass('vertical');
    }
  }

  $(window).resize(checkNavLayout);
  checkNavLayout(); // Initial check
});