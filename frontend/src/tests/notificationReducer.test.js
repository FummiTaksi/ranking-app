import notificationReducer from '../reducers/notificationReducer';

describe('notificationReducer', () => {
  describe('CHANGE_NOTIFICATION', () => {
    const initialState = { icon: '', header: '', message: '' };
    const message = 'Hello world!';
    let newState;
    beforeAll(() => {
      const action = {
        type: 'CHANGE_NOTIFICATION',
        message,
      };
      newState = notificationReducer(initialState, action);
    });
    it(' changes message', () => {
      expect(newState).toBe(message);
    });
  });
});
