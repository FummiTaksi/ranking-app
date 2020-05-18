import React from 'react';
import PropTypes from 'prop-types';

function ProgressBar({ completed, percent }) {
  if (completed) {
    return(
      <h1>This ranking is completed</h1>
    )
  }
  return (
    <h1>{`Percentage: ${percent}`}</h1>
  );
}

ProgressBar.propTypes = {
  completed: PropTypes.bool.isRequired,
  percent: PropTypes.number.isRequired,
};

export default ProgressBar;
