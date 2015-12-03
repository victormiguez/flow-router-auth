Meteor.startup(() => {
  if (!Meteor.users.findOne({'roles.role': 'admin'})) {
    var admin = {
      name:'Admin',
      email:'admin@flow.com',
      roles:
        ['admin']
    };

    let userId = Accounts.createUser({
      email: admin.email,
      password: 'admin',
      profile: { name: admin.name }
    });

    Roles.addUsersToRoles(userId, admin.roles, 'role');
  }
});
