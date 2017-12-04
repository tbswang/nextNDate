var nextNDate = require("../src/nextNDate");
var expect = require('chai').expect;
var readExcel = require('../src/utilReadExcel')
const path = require('path')

// var me = Window;
// console.log(me);
var testcaseFile = path.resolve(`${__dirname}`, "../testcase/last", "test_wq.xlsx");
console.log(testcaseFile);
console.log(__dirname)
var testcase = readExcel(testcaseFile);
describe("nextNDate的测试", function () {
    for (let i = 0; i < testcase.length; i++) {
        it(`${testcase[i].date}的${testcase[i].n}天后是${testcase[i].output}`, function () {
            expect(nextNDate(testcase[i].date, testcase[i].n)).to.be.equal(testcase[i].output)
        })
    }
    // it(`1582/10/15的0天后是1582/10/2`, function () {
    //     expect(nextNDate("1582/10/15", -3)).to.be.equal("1582/10/2")
    // })
})
