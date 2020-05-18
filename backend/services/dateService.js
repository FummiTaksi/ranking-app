const isFall = date => date.getMonth() >= 6;

const substringYear = year => year.toString().substring(2, 4);

const getFallAndSpringYears = (date) => {
  const year = date.getFullYear();
  const currentYear = substringYear(year);
  if (isFall(date)) {
    return `(Syksy-${currentYear} tai Kevät-${currentYear})`;
  }
  const previousYear = substringYear(year - 1);
  return `(Kevät-${currentYear} tai Syksy-${previousYear})`;
};

const returnDateStringAndNoMorePlayers = (date) => {
  const seasonInfo = getFallAndSpringYears(date);
  const nameString = `Pelaajalla pitää olla vähintään yksi kisatulos ${seasonInfo} jotta näkyisi tällä listalla`;
  const noMorePlayers = `Seuraavilla pelaajilla on rating mutta ei yhtään kisatulosta ${seasonInfo} eli eivät mukana ylläolevalla listalla`;
  return {
    nameString,
    noMorePlayers,
  };
};
module.exports = { returnDateStringAndNoMorePlayers };
