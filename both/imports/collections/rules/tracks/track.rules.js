import Votify from '/both/imports/app';

const collection = Votify.Collections.Tracks().getCollection().getRawCollection();

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

collection.after.update(afterUpdate, { fetchPrevious: false });
