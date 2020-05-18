const dateService = require('../../../services/dateService');

describe('dateService', () => {
  describe('returnDateStringAndNoMorePlayers', () => {
    describe(' when date is in june', () => {
      let returnObject;
      beforeAll(() => {
        returnObject = dateService.returnDateStringAndNoMorePlayers(new Date(2020, 5, 20));
      });
      test(' nameString is correct', () => {
        const nameString = 'Pelaajalla pitää olla vähintään yksi kisatulos (Kevät-20 tai Syksy-19) jotta näkyisi tällä listalla';
        expect(returnObject.nameString).toEqual(nameString);
      });
      test(' noMorePlayers is correct', () => {
        const noMorePlayers = 'Seuraavilla pelaajilla on rating mutta ei yhtään kisatulosta (Kevät-20 tai Syksy-19) eli eivät mukana ylläolevalla listalla';
        expect(returnObject.noMorePlayers).toEqual(noMorePlayers);
      });
    });
    describe(' when date is in july', () => {
      let returnObject;
      beforeAll(() => {
        returnObject = dateService.returnDateStringAndNoMorePlayers(new Date(2020, 6, 20));
      });
      test(' nameString is correct', () => {
        const nameString = 'Pelaajalla pitää olla vähintään yksi kisatulos (Syksy-20 tai Kevät-20) jotta näkyisi tällä listalla';
        expect(returnObject.nameString).toEqual(nameString);
      });
      test(' noMorePlayers is correct', () => {
        const noMorePlayers = 'Seuraavilla pelaajilla on rating mutta ei yhtään kisatulosta (Syksy-20 tai Kevät-20) eli eivät mukana ylläolevalla listalla';
        expect(returnObject.noMorePlayers).toEqual(noMorePlayers);
      });
    });
  });
});
