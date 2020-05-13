import loginReducer from '../reducers/loginReducer';

describe('loginReducer ', () => {
  const initialState = {
    username: undefined,
    admin: undefined,
    token: '',
  };
  const loginState = {
    username: 'Admin',
    admin: true,
    token: 'AdminToken',
  };
  it(' should return a proper initial state when called with undefined state', () => {
    const action = {
      type: 'DO_NOTHING',
    };
    const newState = loginReducer(undefined, action);
    expect(newState).toEqual(initialState);
  });
  it(' LOGIN type action works properly', () => {
    const action = {
      type: 'LOGIN',
      username: loginState.username,
      admin: loginState.admin,
      token: loginState.token,
    };
    const newState = loginReducer(initialState, action);
    expect(newState).toEqual(newState);
  });
  it(' LOGOUT type action works properly', () => {
    const action = {
      type: 'LOGOUT',
    };
    const newState = loginReducer(loginState, action);
    expect(newState).toEqual(initialState);
  });
});
