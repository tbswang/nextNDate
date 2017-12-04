/**
 * function: read a excel file using xlsx module
 * time: 2017-12-02 20:37:08
 * input : readExcel(${filename})
 * output: a json object 
 */

const XLSX = require('xlsx');

var readExcel = function (filename) {
    if (!filename) {
        throw "read test case file error";
    }

    var workbook = XLSX.readFile(filename);
    var SheetNames = workbook.SheetNames;//返回的是一个数组, 数组元素是'工作表'
    // console.log(workbook.SheetNames);
    var workSheet = workbook.Sheets[SheetNames[0]]
    workSheet = XLSX.utils.sheet_to_json(workSheet);
    console.log(workSheet);
    // console.log(workSheet[1]);
    // console.log(workSheet.length);
    return workSheet;
}

module.exports = readExcel;