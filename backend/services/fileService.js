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

const returnDateObject = (base64String) => {
  const withoutPrefix = base64String.substring(37);
  const options = { type: 'base64' };
  const xlsFromBase64 = xlsx.read(withoutPrefix, options);
  const json = xlsx.utils.sheet_to_json(xlsFromBase64.Sheets.Pelaajat);
  const string = splitDate(json[0]['SPTL RATINGS']);
  const parts = string.split('.');
  const date = new Date(parts[2], parts[1] - 1, parts[0]);
  return date;
};

module.exports = { convertBase64ToExcel, returnDateObject };
