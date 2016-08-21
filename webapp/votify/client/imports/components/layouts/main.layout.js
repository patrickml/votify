import React, { PropTypes } from 'react';
import Alert from 'react-s-alert';

const MainLayout = ({ content }) => (
  <div className="votify-container">
    {content}
    <Alert
      stack
      limit={1}
      timeout={2000}
      position="top"
      effect="jelly"
    />
  </div>
);

MainLayout.propTypes = {
  content: PropTypes.object,
};

export default MainLayout;
