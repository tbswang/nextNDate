/**
 * time: 2017-12-02 14:48:52
 * function: calculate the n days after the date;
 * 
 */

const nextDate = require('./afterDate');
const inputDateRational = require("./inputDateRational");


//已经可以保证输入的数据是整数
var afterNDate2 = function (year, month, day, n) {
    let afterYear = year;
    let afterMonth = month;
    let afterDay = day;
    while (n-- > 0) {
        [afterYear, afterMonth, afterDay] = nextDate(afterYear, afterMonth, afterDay);
    }
    return [afterYear, afterMonth, afterDay];
}
module.exports = afterNDate2;