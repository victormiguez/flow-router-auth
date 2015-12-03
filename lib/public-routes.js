const exposed = FlowRouter.group({
  triggersEnter: [
    () => {
      if (Meteor.loggingIn() || Meteor.userId())
        return FlowRouter.go('dashboard');
    }
  ]
});

exposed.route('/login', {
  name: 'login',
  action: () => {
    BlazeLayout.render('login');
  }
});
