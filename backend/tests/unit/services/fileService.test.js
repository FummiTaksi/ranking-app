const testHelpers = require('../../helpers/testHelpers');
const fileService = require('../../../services/fileService');

describe('FileService', () => {
  test(' converts base64 to json ', () => {
    const base64 = testHelpers.getRatingBase64();
    const fileJson = fileService.convertBase64ToExcel(base64);
    expect(fileJson.length).toEqual(11);
  });
  test(' returnDateString returns correct string variable', () => {
    const base64 = testHelpers.getKoskiBase64();
    const string = fileService.returnDateString(base64);
    expect(string).toEqual('Viimeinen päivitys: Kosken_Malja_GP_su - 06.01.2019');
  });
});
