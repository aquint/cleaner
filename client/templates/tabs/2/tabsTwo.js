Template.tabsTwo.onRendered(function(){
  Session.set('currentTab', 'tabs.two');

  // Session.setDefault("slider", [20, 80]);

  // this.$("#slider").noUiSlider({
  //   start: Session.get("slider"),
  //   connect: true,
  //   range: {
  //     'min': 0,
  //     'max': 100
  //   }
  // }).on('slide', function (ev, val) {
  //   // set real values on 'slide' event
  //   Session.set('slider', val);
  // }).on('change', function (ev, val) {
  //   // round off values on 'change' event
  //   Session.set('slider', [Math.round(val[0]), Math.round(val[1])]);
  // });
  $('.ui.rating').rating('disable');
});

Template.tabsTwoCleanerDetail.onRendered(function(){
  Session.set('currentTab', 'tabs.two.chat-detail.about');
  $('a[href="/tabs/two"]').addClass('active');
  $('.ui.rating').rating('disable');
  $('.datepicker').pickadate();
});

Template.tabsTwoCleanerDetail.onDestroyed(function(){
  $('a[href="/tabs/two"]').removeClass('active');
})

