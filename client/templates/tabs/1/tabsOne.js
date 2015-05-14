Template.tabsOne.onRendered(function(){
  imgToSvg();
  Session.set('bedrooms', 1);
  Session.set('bathrooms', 1);
  Session.set('hours', 1);
});

Template.tabsOne.helpers({
  'recommendedHours': function() {
    Session.setDefault('extras', 0);
    var rooms = Session.get('bedrooms');
    var baths = Session.get('bathrooms');
    var extras = Session.get('extras');

    Session.set('totalTime', rooms + baths + extras)
    
    return Session.get('totalTime');
  }
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
  },
  'click svg': function( e, tpl ){
    // target the svg object
    var target = e.currentTarget;

    // make an array of all its classes
    var classes = $(target).attr('class').split(' ');

    // check to see if that array contains the class: selected
    var contains = _.contains(classes, "selected");

    if (contains) {
      // lets remove selected and restore the original classes
      $(target).attr("class", "svg custom-icon replaced-svg")
      $(target).children().attr('fill', "#fff");  
    } else {
      // lets add selected
      $(target).attr("class", "svg custom-icon replaced-svg selected");
      $(target).children().attr('fill', "#9e7ac2");  
    };
    Session.set('extras', $('svg.selected').length);
  },
  'click [data-pass="choose-cleaner"]': function() {
    // we want to use all the session data somehow
    Router.go("/tabs/two")
  }
})


function imgToSvg() {
   /*
     * Replace all SVG images with inline SVG
     */
     jQuery('img.svg').each(function(){
      var $img = jQuery(this);
      var imgID = $img.attr('id');
      var imgClass = $img.attr('class');
      var imgURL = $img.attr('src');

      jQuery.get(imgURL, function(data) {
                // Get the SVG tag, ignore the rest
                var $svg = jQuery(data).find('svg');

                // Add replaced image's ID to the new SVG
                if(typeof imgID !== 'undefined') {
                  $svg = $svg.attr('id', imgID);
                }
                // Add replaced image's classes to the new SVG
                if(typeof imgClass !== 'undefined') {
                  $svg = $svg.attr('class', imgClass+' replaced-svg');
                }

                // Remove any invalid XML tags as per http://validator.w3.org
                $svg = $svg.removeAttr('xmlns:a');

                // Replace image with new SVG
                $img.replaceWith($svg);

              }, 'xml');

    });
}