// DPP code

var remote = DDP.connect("http://localhost:3000/");
Vendors = new Mongo.Collection('vendors', remote);

Template.tabsLayout.helpers({
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
  }
});

// routes

Router.route('/vendors', {
  name: 'vendors',
  controller: 'VendorController',
  where: 'client',
  action: 'action'
});