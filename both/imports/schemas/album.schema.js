import { SimpleSchema } from 'meteor/aldeed:simple-schema';

export default new SimpleSchema({
  album_type: {
    type: String,
  },
  available_markets: {
    type: [String],
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
  images: {
    type: [Object],
  },
  'images.$.height': {
    type: Number,
  },
  'images.$.url': {
    type: String,
  },
  'images.$.width': {
    type: Number,
  },
  name: {
    type: String,
  },
  type: {
    type: String,
  },
  uri: {
    type: String,
  },
});
