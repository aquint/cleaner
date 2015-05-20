Template.tabsTwo.rendered = function () {
  $('.ui.rating').rating('disable');
};

Template.tabsTwoCleanerDetailAbout.onRendered(function(){
  activate('about');
});

function activate(value) {
  $('.tabs-cleaner').addClass('active');

  var string = '.tabs-' + value; 
  console.log(string);
  check(string, String); 
  $(string).addClass('active');
}




