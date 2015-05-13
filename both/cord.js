if (Meteor.isCordova) {
  document.addEventListener("menubutton", onMenuKeyDown, false);

  function onMenuKeyDown() {
    Router.go("/authenticate");
  }
}