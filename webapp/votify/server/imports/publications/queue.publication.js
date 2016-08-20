import { Meteor } from 'meteor/meteor';
import Votify from '/both/imports/app';

// publishes all tracks in queue
Meteor.publish('queue', () => Votify.Collections.Tracks().cursor());
