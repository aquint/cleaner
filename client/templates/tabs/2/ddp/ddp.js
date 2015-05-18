// DPP code

var remote = DDP.connect("http://localhost:3000/");
Vendors = new Mongo.Collection('vendors', remote);

Template.tabsTwo.onCreated(function(){
  remote.subscribe('vendors', function(){
    //var vendors = Vendors.find({});
  })
});

Template.tabsTwo.helpers({
  vendor: function() {
    return Vendors.find({});
  }
})

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
  this.route('tabs.two.cleaner-detail.reviews/:id', {
    path: '/tabs/two/cleaner-detail/reviews/:id', 
    layoutTemplate: 'tabsLayout', 
    template: "tabsTwoCleanerDetail",
    waitOn: function () {
      // return one handle, a function, or an array
      return remote.subscribe('vendors', this.params.id); 
    },
    data: function() {
      return Vendors.findOne(this.params.id);
    },
    yieldTemplates: {
      'tabsTwoCleanerDetailReviews': {to: "subtabs"}
    }
  });
});