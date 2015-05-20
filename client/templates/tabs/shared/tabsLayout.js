Template.tabsTwo.rendered = function () {
  $('.tabs-cleaner').addClass('active')
};

Template.tabsTwo.onDestroyed(function () {
  $('.tabs-cleaner').removeClass('active')
});

Template.tabsOne.rendered = function() {
  $('.tabs-clean').addClass('active')
};

Template.tabsOne.onDestroyed(function () {
  $('.tabs-clean').removeClass('active')
});

