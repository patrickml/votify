import { Meteor } from 'meteor/meteor';
import Votify from '/both/imports/app';

const collection = Votify.Collections.Tracks;
const rawCollection = collection().getCollection().getRawCollection();

/**
 * Performs actions after a document is updated
 * @method afterUpdate
 * @param  {String}    userId the user Id
 * @param  {Object}    doc    the document that was updated
 */
const afterUpdate = (userId, doc) => {
  if (doc.votes.length < 1) {
    Votify.Collections.Tracks().where('_id', '=', doc._id).remove();
  }
};

/**
 * Performs actions before a document is inserted
 * @method afterUpdate
 * @param  {String}    userId the user Id
 * @param  {Object}    doc    the document that was updated
 */
const beforeInsert = (userId, doc) => {
  if (collection().where('id', '=', doc.id).cursor().count() > 0) {
    throw new Meteor.Error('Duplicate', `${doc.name} is already queue.`);
    return false;
  }
};

rawCollection.before.insert(beforeInsert);
rawCollection.after.update(afterUpdate, { fetchPrevious: false });
