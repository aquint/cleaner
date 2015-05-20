Template.home.onCreated(function(){
  Session.set('hasHeader', false);
})

Template.home.onRendered(function(){
  
})

Template.landing.events({
  'click [data-go-tabs]': function() {
    var postalCode = $('[name="postalcode"]').val();
    
    if (postalCode) {
      Session.setPersistent("postalCode", postalCode);
    }

    Router.go("/clean");
    
      
    // else {
    //   alert('Please set your postal code');
    // }
    
  }
})

