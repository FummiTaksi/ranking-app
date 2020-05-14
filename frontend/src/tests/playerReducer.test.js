import playerReducer from '../reducers/playerReducer';

describe('playerReducer', () => {
  const initialState = {
    players: [], selectedPlayer: undefined, loading: false, error: false,
  };
  const loadingState = {
    players: [], selectedPlayer: undefined, loading: true, error: false,
  };
  const player = { name: 'Player1' };
  const player2 = { name: 'Player2' };
  const players = [player, player2];
  describe('GET_PLAYERS', () => {
    it('GETTING_PLAYERS puts loading to true', () => {
      const action = {
        type: 'GETTING_PLAYERS',
      };
      const newState = playerReducer(initialState, action);
      expect(newState.loading).toBeTruthy();
    });
    describe('GET_PLAYERS_SUCCESS', () => {
      let newState;
      beforeAll(() => {
        const action = {
          type: 'GET_PLAYERS_SUCCESS',
          content: {
            players,
          },
        };
        newState = playerReducer(loadingState, action);
      });
      it(' adds players to list', () => {
        expect(newState.players.length).toBe(2);
      });
      it(' sets loading to false', () => {
        expect(newState.loading).toBeFalsy();
      });
    });
    describe('GET_PLAYERS_ERROR', () => {
      let newState;
      beforeAll(() => {
        const action = {
          type: 'GET_PLAYERS_FAILURE',
        };
        newState = playerReducer(loadingState, action);
      });
      it(' sets loading to false', () => {
        expect(newState.loading).toBeFalsy();
      });
      it(' sets error to true', () => {
        expect(newState.error).toBeTruthy();
      });
    });
  });
  describe('GET_PLAYER', () => {
    it('GETTING_PLAYER puts loading to false', () => {
      const action = {
        type: 'GETTING_PLAYER',
      };
      const newState = playerReducer(initialState, action);
      expect(newState.loading).toBeTruthy();
    });
    describe('GET_PLAYER_SUCCESS', () => {
      let newState;
      beforeAll(() => {
        const action = {
          type: 'GET_PLAYER_SUCCESS',
          content: {
            player,
          },
        };
        newState = playerReducer(loadingState, action);
      });
      it(' sets selectedPlayer correctly', () => {
        expect(newState.selectedPlayer.name).toEqual(player.name);
      });
      it(' sets loading to false', () => {
        expect(newState.loading).toBeFalsy();
      });
    });
    describe('GET_PLAYER_FAILURE', () => {
      let newState;
      beforeAll(() => {
        const action = {
          type: 'GET_PLAYER_FAILURE',
        };
        newState = playerReducer(loadingState, action);
      });
      it(' sets loading to false', () => {
        expect(newState.loading).toBeFalsy();
      });
      it(' sets error to true', () => {
        expect(newState.error).toBeTruthy();
      });
    });
  });
});
