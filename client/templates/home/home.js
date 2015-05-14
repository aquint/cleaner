Template.home.onCreated(function(){
  Session.set('hasHeader', false);
})

Template.home.onRendered(function(){
  $('#home').velocity("transition.slideDownIn", function(){});
})

Template.landing.events({
  'click [data-go-tabs]': function() {
    var postalCode = $('[name="postalcode"]').val();
    
    if (postalCode) {
      Session.setPersistent("postalCode", postalCode);
    }

    $('#home').velocity("transition.slideDownOut", {
      duration: 100,
      complete: function() {
        Router.go("/tabs/one");
      }
    }); 
      
    // else {
    //   alert('Please set your postal code');
    // }
    
  }
})

