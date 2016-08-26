import React, { PropTypes } from 'react';
import { composeWithTracker } from 'react-komposer';
import EventHorizon from 'meteor/patrickml:event-horizon';
import Modal from 'react-modal';

const AlbumModal = ({ albumID }) => {
  console.log('In component:', albumID);

  return (
    <div className="modal">
    <Modal
      isOpen={albumID}
    >
  <h1>Album Title</h1>
  <h2>Retrieve albumID: {albumID}</h2>
  <p>List of Songs</p>
</Modal>
    </div>
  );
};

Modal.propTypes = {
};

export default composeWithTracker((props, onData) => {
  const { albumID } = EventHorizon.subscribe('search');
  onData(null, { albumID });
})(AlbumModal);
