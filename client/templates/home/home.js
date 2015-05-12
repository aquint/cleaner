Template.home.onRendered(function(){
  $('#homeTransition').velocity("transition.swoopIn", function(){});
})

Template.landing.events({
  'click [data-go-tabs]': function() {
    Router.go("/tabs/one");
  }
})