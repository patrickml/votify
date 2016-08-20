import { Collection } from 'meteor/patrickml:singularity';
import Track from '../models/track.model';

export default class Tracks extends Collection {
  constructor() {
    super({ name: 'tracks', model: Track });
  }
}
