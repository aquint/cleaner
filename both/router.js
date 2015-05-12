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
