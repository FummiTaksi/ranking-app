const testHelpers = require('../../helpers/testHelpers');
const fileService = require('../../../services/fileService');

describe('FileService', () => {
  test(' converts base64 to json ', () => {
    const base64 = testHelpers.getRatingBase64();
    const fileJson = fileService.convertBase64ToExcel(base64);
    expect(fileJson.length).toEqual(11);
  });
  test(' returnDateString returns correct date variable', () => {
    const base64 = testHelpers.getKoskiBase64();
    const date = fileService.returnDateObject(base64);
    expect(date.getFullYear()).toEqual(2019);
    expect(date.getMonth()).toEqual(0);
    expect(date.getDate()).toEqual(6);
  });
});
