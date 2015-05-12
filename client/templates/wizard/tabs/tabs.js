Template.tabsOne.onRendered(function(){
  imgToSvg();
});



Template.tabsOne.helpers({
  'recommendedHours': function() {
    var rooms = Session.get('bedrooms');
    var baths = Session.get('bathrooms');
    var extras = Session.get('extras');
    
    return rooms + baths + extras;
  }
})

Template.tabsOne.events({
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
      $(target).children().attr('fill', "#000");  
    } else {
      // lets add selected
      $(target).attr("class", "svg custom-icon replaced-svg selected");
      $(target).children().attr('fill', "#20A5A1");  
    };
    Session.set('extras', $('svg.selected').length);
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