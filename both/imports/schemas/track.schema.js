import { SimpleSchema } from 'meteor/aldeed:simple-schema';
import AlbumSchema from './album.schema';
import ArtistSchema from './artist.schema';

export default new SimpleSchema({
  album: {
    type: AlbumSchema,
  },
  artists: {
    type: [ArtistSchema],
  },
  available_markets: {
    type: [String],
  },
  disc_number: {
    type: Number,
  },
  duration_ms: {
    type: Number,
  },
  explicit: {
    type: Boolean,
  },
  external_ids: {
    type: Object,
  },
  'external_ids.isrc': {
    type: String,
  },
  external_urls: {
    type: Object,
  },
  'external_urls.spotify': {
    type: String,
  },
  href: {
    type: String,
  },
  id: {
    type: String,
  },
  name: {
    type: String,
  },
  popularity: {
    type: Number,
  },
  preview_url: {
    type: String,
  },
  track_number: {
    type: Number,
  },
  type: {
    type: String,
  },
  uri: {
    type: String,
  },
});
