// DPP code

var remote = DDP.connect("http://localhost:3000/");
Vendors = new Mongo.Collection('vendors', remote);

Template.tabsTwo.helpers({
  vendor: function() {
    return Vendors.find({});
  }
})

// tabs controller

VendorController = RouteController.extend({
  layoutTemplate: 'tabsLayout',
  template: "tabsTwoCleanerDetail",
  waitOn: function() { return remote.subscribe('vendors'); },
  data: function() { return Vendors.find({}); },
  action: function() {
    this.render('tabsTwo');
    //this.render('tabsTwoCleanerDetailAbout', { to: 'subtabs' });
  },
  about: function() {
    this.render('tabsTwoCleanerDetail');
    this.render('tabsTwoCleanerDetailAbout', { to: 'subtabs' });
  },
  reviews: function() {
    this.render('tabsTwoCleanerDetail');
    this.render('tabsTwoCleanerDetailReviews', { to: 'subtabs' });
  }
});

// routes

Router.route('/vendors', {
  name: 'vendors',
  //path: '/vendors',
  controller: 'VendorController',
  where: 'client',
  action: 'action'
});

Router.route('/vendor/:id', {
  name: 'vendor',
  //path: 'about',
  controller: 'VendorController',
  where: 'client',
  action: 'about',
  data: function() { return Vendors.findOne(this.params.id); }
});

Router.route('/vendor/:id/reviews', {
  name: 'vendor.reviews',
  //path: 'reviews',
  controller: 'VendorController',
  where: 'client',
  action: 'reviews',
  data: function() { return Vendors.findOne(this.params.id); }
});
