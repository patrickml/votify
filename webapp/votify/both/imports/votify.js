import Tracks from './collections/tracks.collection';

export default class Votify {
  constructor() {
    this.Collections = {
      Tracks: new Tracks(),
    };
  }
}
