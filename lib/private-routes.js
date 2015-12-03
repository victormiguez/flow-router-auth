const loggedIn = FlowRouter.group({
  triggersEnter: [
    () => {
      if (!(Meteor.loggingIn() || Meteor.userId())) {
        let route = FlowRouter.current();
        
        if (route.route.name !== 'login')
          Session.set('redirectAfterLogin', route.path);
        
        return FlowRouter.go('login');
      }
    }
  ]
});

loggedIn.route('/dashboard', {
  name: 'dashboard',
  action: () => {
    console.log('ac');
    return BlazeLayout.render('dashboard');
  }
});

loggedIn.route('/settings', {
  name: 'settings',
  action: () => {
    return BlazeLayout.render('settings');
  }
});

loggedIn.route('/logout', {
  name: 'logout',
  action: () => {
    Meteor.logout(() => {
      FlowRouter.go('login');
    });
  }
});

const admin = loggedIn.group({
  prefix: '/admin',
  triggersEnter: [
    () => {
      if (!Roles.userIsInRole(Meteor.user(), ['admin'])) {
        return FlowRouter.go(FlowRouter.path('dashboard'));
      }
    }
  ]
});

admin.route('/billing', {
  name: 'billing',
  action: () => {
    return BlazeLayout.render('billing');
  }
});

admin.route('/users', {
  name: 'users',
  action: () => {
    return BlazeLayout.render('users');
  }
});
