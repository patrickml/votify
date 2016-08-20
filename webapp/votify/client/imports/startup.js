import { Meteor } from 'meteor/meteor';
import { Tracker } from 'meteor/tracker';
import { Session } from 'meteor/session';
import Votify from '/both/imports/app';

Meteor.startup(() => {
  // Assign new User identifier if not already stored
  // User identifier now availabe with `Session.get('uuid')`
  Session.setDefaultPersistent('uuid', Meteor.uuid());
  // Whenever there is top track change the background image
  Tracker.autorun(() => {
    const top = Votify.Collections.Tracks().firstSync();
    const image = top && _.get(top, 'album.images.0.url') || '';
    document.body.style.background = `url(${image}) no-repeat center center fixed/cover`;
  });
});
