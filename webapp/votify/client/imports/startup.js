import { Tracker } from 'meteor/tracker';
import Votify from '/both/imports/app';

// Whenever there is top track change the background image
Tracker.autorun(() => {
  const top = Votify.Collections.Tracks().firstSync();
  const image = top && _.get(top, 'album.images.0.url') || '';
  document.body.style.background = `url(${image}) no-repeat center center fixed/cover`;
});
