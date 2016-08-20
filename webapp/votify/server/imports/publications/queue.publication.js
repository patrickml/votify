import { Meteor } from 'meteor/meteor';
import Votify from '/both/imports/app';

Meteor.publish('queue', () => Votify.Collections.Tracks().cursor());
