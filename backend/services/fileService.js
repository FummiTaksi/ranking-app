const xlsx = require('xlsx');

const convertBase64ToExcel = (base64String) => {
  const withoutPrefix = base64String.substring(37);
  const options = { type: 'base64' };
  const xlsFromBase64 = xlsx.read(withoutPrefix, options);
  return xlsx.utils.sheet_to_json(xlsFromBase64.Sheets['Rating järjestys']);
};

const splitDate = (string) => {
  const splitted = string.split('- ');
  return splitted[1];
};

const returnDateString = (base64String) => {
  const withoutPrefix = base64String.substring(37);
  const options = { type: 'base64' };
  const xlsFromBase64 = xlsx.read(withoutPrefix, options);
  const json = xlsx.utils.sheet_to_json(xlsFromBase64.Sheets.Pelaajat);
  const string = json[0]['SPTL RATINGS'];
  return splitDate(string);
};

module.exports = { convertBase64ToExcel, returnDateString };
