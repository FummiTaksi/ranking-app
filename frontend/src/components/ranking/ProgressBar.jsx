import React from 'react';
import PropTypes from 'prop-types';

function ProgressBar({ completed }) {
  return (
    <h1>{`Is this ranking completed: ${completed}`}</h1>
  );
};

ProgressBar.propTypes = {
  completed: PropTypes.bool.isRequired,
};

export default ProgressBar;
