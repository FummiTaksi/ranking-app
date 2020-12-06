import React, { useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Input from '../../components/form/Input';
import { login } from '../../reducers/loginReducer';

function SignInForm(props) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const { logIn } = props;

  const onSubmit = (event) => {
    event.preventDefault();
    logIn({ username, password });
    setUsername('');
    setPassword('');
  };

  return (
    <div>
      <h2>
        Signing in is only available for admin!
      </h2>
      <form onSubmit={onSubmit}>
        <Input
          type="input"
          text="Username:"
          name="username"
          value={username}
          onChange={event => setUsername(event.target.value)}
        />
        <Input
          type="password"
          text="Password:"
          name="password"
          value={password}
          onChange={event => setPassword(event.target.value)}
        />
        <button type="submit">
          Log in
          {' '}
        </button>
      </form>
    </div>
  );
}

SignInForm.propTypes = {
  logIn: PropTypes.func.isRequired,
};

const mapDispatchToProps = {
  logIn: login,
};

const ConnectedSignInForm = connect(
  null,
  mapDispatchToProps,
)(SignInForm);

export default ConnectedSignInForm;
