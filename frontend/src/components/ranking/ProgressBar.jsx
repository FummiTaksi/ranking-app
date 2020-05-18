import React from 'react';
import PropTypes from 'prop-types';

function ProgressBar({ completed }) {
  if (completed) {
    return (
      <div id="completed">
        <h1>Uploading complete</h1>
      </div> 
    )
  }
  return (
    <div id="notCompleted">
      <h1>Uploading not complete</h1>
    </div>
  );
}

ProgressBar.propTypes = {
  completed: PropTypes.bool.isRequired,
};

export default ProgressBar;
