import rankingReducer from '../reducers/rankingReducer';

describe('rankingReducer', () => {
  const initialState = { allRankings: [], selectedRanking: {}, loading: false };
  const loadingState = { allRankings: [], selectedRanking: {}, loading: true };

  const ranking = {
    name: 'reducerTestRanking',
    _id: '1',
  };
  const anotherRanking = {
    name: 'secondReducerTestRanking',
    _id: '2',
  };
  const rankingArray = [ranking, anotherRanking];
  const stateWithRankings = { allRankings: rankingArray, selectedRanking: {}, loading: true };
  it(' should return a proper initial state when called with undefined state', () => {
    const action = {
      type: 'DO_NOTHING',
    };
    const newState = rankingReducer(undefined, action);
    expect(newState).toEqual(initialState);
  });
  describe(' When creating ranking', () => {
    it(' CREATING_RANKING sets loading to true', () => {
      const action = {
        type: 'CREATING_RANKING',
      };
      const newState = rankingReducer(initialState, action);
      expect(newState.loading).toBeTruthy();
    });

    describe('CREATE_RANKING', () => {
      let newState;
      beforeAll(() => {
        const action = {
          type: 'CREATE_RANKING',
          content: {
            ranking,
          },
        };
        newState = rankingReducer(loadingState, action);
      });
      it(' adds rankingObject to the list', () => {
        expect(newState.allRankings.length).toEqual(1);
      });
      it(' puts loading to false', () => {
        expect(newState.loading).toBeFalsy();
      });
    });
  });

  describe(' When setting rankings', () => {
    it(' SETTING_RANKINGS sets loading to true', () => {
      const action = {
        type: 'SETTING_RANKINGS',
      };
      const newState = rankingReducer(initialState, action);
      expect(newState.loading).toBeTruthy();
    });
    describe('SET_RANKINGS', () => {
      let newState;
      beforeAll(() => {
        const action = {
          type: 'SET_RANKINGS',
          content: {
            rankings: rankingArray,
          },
        };
        newState = rankingReducer(loadingState, action);
      });

      it(' adds an array of rankings', () => {
        expect(newState.allRankings.length).toBe(2);
      });
      it(' sets loading to false', () => {
        expect(newState.loading).toBeFalsy();
      });
    });
    describe('When deleting ranking', () => {
      it(' DELETING_RANKING sets loading to true', () => {
        const action = {
          type: 'DELETING_RANKING',
        };
        const newState = rankingReducer(initialState, action);
        expect(newState.loading).toBeTruthy();
      });
      describe('DELETE_RANKING', () => {
        let newState;
        let allRankings;
        beforeAll(() => {
          const action = {
            type: 'DELETE_RANKING',
            content: {
              deletedRanking: anotherRanking,
            },
          };
          newState = rankingReducer(stateWithRankings, action);
          ({ allRankings } = newState);
        });
        it(' reduces the amount of rankings', () => {
          expect(allRankings.length).toBe(1);
        });
        it(' deletes the correct ranking', () => {
          expect(allRankings[0]._id).toBe('1');
        });
        it(' changes loading to false', () => {
          expect(newState.loading).toBeFalsy();
        });
      });
    });
  });
  describe('When getting ranking', () => {
    it(' GETTING_RANKING sets loading to true', () => {
      const action = {
        type: 'GETTING_RANKING',
      };
      const newState = rankingReducer(initialState, action);
      expect(newState.loading).toBeTruthy();
    });
    describe(' GET_RANKING', () => {
      let newState;
      beforeAll(() => {
        const action = {
          type: 'GET_RANKING',
          content: {
            ranking,
          },
        };
        newState = rankingReducer(loadingState, action);
      });
      it(' adds ranking to selectedRanking', () => {
        expect(newState.selectedRanking._id).toBe('1');
      });
      it(' changes loading to false', () => {
        expect(newState.loading).toBeFalsy();
      });
    });
  });
});
