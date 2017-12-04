/**
 * time: 2017-12-02 14:48:52
 * function: calculate the n days after the date;
 * 
 */

const preDate = require('./preDate');
const inputDateRational = require("./inputDateRational");


var preNDate2 = function (year, month, day, n) {
    let preYear = year;
    let preMonth = month;
    let preDay = day;
    while (n-- > 0) {
        [preYear, preMonth, preDay] = preDate(preYear, preMonth, preDay);
    }
    return [preYear, preMonth, preDay];
}
module.exports = preNDate2;