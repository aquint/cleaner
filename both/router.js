Router.onBeforeAction(function() {
  // if (!Meteor.user()) {
  //   this.render('authenticate');
  // } else {
     this.next();
  // }
});

Router.configure({
  layoutTemplate: "applicationLayout"
})

Router.route('/', {
  template: "home",
  name: "home",
  layoutTemplate: "homeLayout"
});

Router.route('/authenticate', {
  template: "authenticate",
  name: "authenticate"
});

Router.map(function() {
  this.route('tabs.one', {path: '/tabs/one', layoutTemplate: 'tabsLayout'});
  this.route('tabs.two', {path: '/tabs/two', layoutTemplate: 'tabsLayout'});
  this.route('tabs.three', {path: '/tabs/three', layoutTemplate: 'tabsLayout'});
  this.route('tabs.four', {path: '/tabs/four', layoutTemplate: 'tabsLayout'});
});