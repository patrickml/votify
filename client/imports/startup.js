import { Meteor } from 'meteor/meteor'
import { Session } from 'meteor/session'

// Assign new User identifier if not already stored
Meteor.startup(() => {
  Session.setDefaultPersistent('uuid', Meteor.uuid())
  // User identifier now availabe with `Session.get('uuid')`
})
