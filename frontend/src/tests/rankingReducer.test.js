import rankingReducer from '../reducers/rankingReducer';

describe('rankingReducer ', () => {
  const initialState = { allRankings: [], selectedRanking: {}, loading: false };
  it(' should return a proper initial state when called with undefined state', () => {
    const action = {
      type: 'DO_NOTHING',
    };
    const newState = rankingReducer(undefined, action);
    expect(newState).toEqual(initialState);
  });
  it(' CREATE_RANKING works properly', () => {
    const ranking = {
      name: 'reducerTestRanking',
      _id: '1',
    };
    const action = {
      type: 'CREATE_RANKING',
      content: {
        ranking
      }
    };
    const newState = rankingReducer(initialState, action);
    expect(newState.allRankings.length).toEqual(1);
  });
});
