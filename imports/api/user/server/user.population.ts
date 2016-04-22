import {Meteor} from 'meteor/meteor';

if (Meteor.settings.public.environment === 'development' && Meteor.users.find().count() === 0) {
  
  const users = [{
    role: 'user',
    services: {
      password: {
        bcrypt: '$2a$10$fsBhwou9ZapwZw8BLNNEZu3CcIDO4Fcwja.UZJJ9RqkyKz5GcAVLm'
      }
    },
    emails: [{
      address: 'john@weboxstudio.com',
      verified: true
    }],
    profile: {
      name: 'John',
      surname: 'Doe',
    },
  }];
  
  for (let user of users) {
    Meteor.users.insert(user);
    console.log(`Inserted user "${user.emails[0].address}"`);
  }
}