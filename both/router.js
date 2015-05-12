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

  // Subtabs in cleaner detail page
  this.route('tabs.two.cleaner-detail.about', {
    path: '/tabs/two/cleaner-detail/about', 
    layoutTemplate: 'tabsLayout', 
    template: "tabsTwoCleanerDetail",
    yieldTemplates: {
      'tabsTwoCleanerDetailAbout': {to: "subtabs"}
    }
  });
  this.route('tabs.two.cleaner-detail.pricing', {
    path: '/tabs/two/cleaner-detail/pricing', 
    layoutTemplate: 'tabsLayout', 
    template: "tabsTwoCleanerDetail",
    yieldTemplates: {
      'tabsTwoCleanerDetailPricing': {to: "subtabs"}
    }
  });
  this.route('tabs.two.cleaner-detail.book', {
    path: '/tabs/two/cleaner-detail/book', 
    layoutTemplate: 'tabsLayout', 
    template: "tabsTwoCleanerDetail",
    yieldTemplates: {
      'tabsTwoCleanerDetailBook': {to: "subtabs"}
    }
  });
  this.route('tabs.two.cleaner-detail.reviews', {
    path: '/tabs/two/cleaner-detail/reviews', 
    layoutTemplate: 'tabsLayout', 
    template: "tabsTwoCleanerDetail",
    yieldTemplates: {
      'tabsTwoCleanerDetailReviews': {to: "subtabs"}
    }
  });
});
  





