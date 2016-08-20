import { SimpleSchema } from 'meteor/aldeed:simple-schema';

export default new SimpleSchema({
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
  type: {
    type: String,
  },
  uri: {
    type: String,
  },
});
