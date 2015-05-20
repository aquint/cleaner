// Router.onBeforeAction(function() {
//   if (!Meteor.user()) {
//     this.render('authenticate');
//   } else {
//      this.next();
//   }
// });

Router.configure({
  layoutTemplate: "applicationLayout"
})

Router.route('/', {
  template: "home",
  name: "home",
  layoutTemplate: "homeLayout"
  // onBeforeAction: function() {
  //   var postalCode = Session.get('postalCode');
  //   if (postalCode) {
  //     Router.go("/tabs/one");
  //   }
  // }
});

Router.route('/authenticate', {
  template: "authenticate",
  name: "authenticate"
});

// tab one

Router.route('/clean', {
  name: 'clean',
  layoutTemplate: "tabsLayout",
  template: "tabsOne",
  action: function() { this.render(); }
});
  





