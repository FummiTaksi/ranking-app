import rankingReducer from '../reducers/rankingReducer';

describe('rankingReducer', () => {
  const initialState = { allRankings: [], selectedRanking: {}, loading: false };
  const ranking = {
    name: 'reducerTestRanking',
    _id: '1',
  };
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
        const loadingState = { allRankings: [], selectedRanking: {}, loading: true };
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

  it(' SETTING_RANKINGS sets loading to true', () => {
    const action = {
      type: 'SETTING_RANKINGS',
    };
    const newState = rankingReducer(initialState, action);
    expect(newState.loading).toBeTruthy();
  });
  it(' SET_RANKINGS adds an array of rankings', () => {
    const rankings = [ranking, ranking];
    const action = {
      type: 'SET_RANKINGS',
      content: {
        rankings,
      },
    };
    const newState = rankingReducer(initialState, action);
    expect(newState.allRankings.length).toBe(2);
  });
});
