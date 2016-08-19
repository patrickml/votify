import React, { PropTypes } from 'react';

const MainLayout = ({ content }) => (
  <div className="votify-container">
    {content}
  </div>
);

MainLayout.propTypes = {
  content: PropTypes.object,
};

export default MainLayout;
