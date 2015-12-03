const exposed = FlowRouter.group({});

exposed.route('/login', {
  name: 'login',
  action: () => {
    return BlazeLayout.render('login');
  }
});

exposed.route('/signup', {
  name: 'signup',
  action: () => {
    return BlazeLayout.render('signup');
  }
});
