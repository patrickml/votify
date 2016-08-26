import React, { PropTypes } from 'react';
import { composeWithTracker } from 'react-komposer';
import EventHorizon from 'meteor/patrickml:event-horizon';

const Modal = ({ albumID }) => {
  console.log('In component:', albumID);

  return (
    <div className="modal">
      MODAL HERE
    </div>
  );
};


Modal.propTypes = {
};

export default composeWithTracker((props, onData) => {
  const { albumID } = EventHorizon.subscribe('search');
  onData(null, { albumID });
})(Modal);
