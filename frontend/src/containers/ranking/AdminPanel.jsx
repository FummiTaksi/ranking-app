import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import ProgressBar from '../../components/ranking/ProgressBar';

function AdminPanel({ credentials, completed, percent }) {
  const { admin } = credentials;
  if (admin) {
    return (
      <ProgressBar completed={completed} percent={percent} />
    );
  }
  return null;
}

AdminPanel.propTypes = {
  credentials: PropTypes.shape({
    admin: PropTypes.bool,
  }).isRequired,
  completed: PropTypes.bool.isRequired,
  percent: PropTypes.number.isRequired,
};

const mapStateToProps = state => ({ credentials: state.login });

const ConnectedAdminPanel = connect(
  mapStateToProps,
)(AdminPanel);

export default ConnectedAdminPanel;
