const XLSX = require('xlsx');

function readExcel(filePath) {
    const orangeHRMData = 0;
    const demoqaData = 1;
    const workbook = XLSX.readFile(filePath);
    const sheetName = workbook.SheetNames[orangeHRMData]; // Get the first sheet name
    const sheet = workbook.Sheets[sheetName];
    return XLSX.utils.sheet_to_json(sheet);
}

module.exports = { readExcel };