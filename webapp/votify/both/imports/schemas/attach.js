import Votify from '../app';
import TrackSchema from './track.schema';

Votify.Collections.Tracks().getCollection().getRawCollection().attachSchema(TrackSchema);
Votify.Collections.Tracks().getCollection().getRawCollection().allow({
  insert: () => true,
  update: () => true,
  remove: () => true,
});
