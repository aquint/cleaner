Template.tabsLayout.rendered = function () {
  Session.set('currentTab', 'tabs.one');
};

Template.tabsOne.onRendered(function(){
  Session.set('bedrooms', 1);
  Session.set('bathrooms', 1);
  Session.set('hours', 1);
})

Template.tabsOne.helpers({
  'bedroomCounter': function() {
    return Session.get('bedrooms');
  },
  'bedroomText': function() {
    var plural = Session.get('bedrooms');
    if (plural == 1) {
      return "bedroom"
    } else {
      return "bedrooms"
    }
  },
  'bathroomCounter': function() {
    return Session.get('bathrooms');
  },
  'bathroomText': function() {
    var plural = Session.get('bathrooms');
    if (plural == 1) {
      return "bathroom"
    } else {
      return "bathrooms"
    }
  },
  'hoursCounter': function() {
    return Session.get('hours');
  },
  'hoursText': function() {
    var plural = Session.get('hours');
    if (plural == 1) {
      return "hour"
    } else {
      return "hours"
    }
  }
});

Template.tabsOne.events({
  'click [data-plus-bedroom]': function() {
    var count = Session.get('bedrooms');
    count++;
    Session.set('bedrooms', count);
  },
  'click [data-minus-bedroom]': function() {
    var count = Session.get('bedrooms');
    if (count <= 1) {
      // do nothing
    } else {
      count--;  
    }
    Session.set('bedrooms', count);
  },
  'click [data-plus-bathroom]': function() {
    var count = Session.get('bathrooms');
    count++;
    Session.set('bathrooms', count);
  },
  'click [data-minus-bathroom]': function() {
    var count = Session.get('bathrooms');
    if (count <= 1) {
      // do nothing
    } else {
      count--;  
    }
    Session.set('bathrooms', count);
  },
  'click [data-plus-hour]': function() {
    var count = Session.get('hours');
    count++;
    Session.set('hours', count);
  },
  'click [data-minus-hour]': function() {
    var count = Session.get('hours');
    if (count <= 1) {
      // do nothing
    } else {
      count--;  
    }
    Session.set('hours', count);
  }
})
