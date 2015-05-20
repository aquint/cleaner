Template.tabsTwoCleanerDetail.onRendered(function(){
  $('.ui.rating').rating('disable');
  $('.datepicker').pickadate();

  // highlight ABOUT
  
  $('.subtab-about').addClass('active');

  $('.tabs-cleaner').addClass('active');
  
});

Template.tabsTwoCleanerDetail.onDestroyed(function(){
  $('.subtab-about').removeClass('active');
  $('.tabs-cleaner').removeClass('active');
})

// ---------------------------------------

Template.tabsTwo.rendered = function () {
  $('.tabs-cleaner').addClass('active');
  $('.ui.rating').rating('disable');
};

Template.tabsTwo.onDestroyed(function () {
  $('.tabs-cleaner').removeClass('active');
});

Template.tabsOne.rendered = function() {
  $('.tabs-clean').addClass('active')
};

Template.tabsOne.onDestroyed(function () {
  $('.tabs-clean').removeClass('active')
});



