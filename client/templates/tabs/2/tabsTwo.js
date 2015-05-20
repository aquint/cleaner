Template.tabsTwo.rendered = function () {
  $('.ui.rating').rating('disable');
};

Template.tabsTwoCleanerDetailAbout.onRendered(function(){
  activate('about');
});

function activate(value) {
  $('.tabs-cleaner').addClass('active');

  if ( value == "about" ) {
    $(".subtab-about").addClass('active');  
  };

  if ( value == "reviews" ) {
    $(".subtab-reviews").addClass('active');  
  };

  
  
}




