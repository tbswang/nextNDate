/**
 * function: calculate the previous date;
 * time: 2017-12-01 13:18:14
 */

const isLeapYear = require("./isLeapYear");
const inputDateRational = require('./inputDateRational');
const dayOfMonth = require('./daysOfMonth');

//定义全局的日期
let year = 0;
let month = 0;
let day = 0;
let preYear = 0;
let preMonth = 0;
let preDay = 0;

var getDate = function (Lyear, Lmonth, Lday) {
    // console.log("getDate")
    if (arguments.length != 3) {
        // console.log("input date error");
        return false;
    }
    // console.log(arguments)
    //将获取到数据给全局, 从命令行中获取的数据是Sting 类型, 需要转为数值类型
    year = parseInt(arguments[0]);
    month = parseInt(arguments[1]);
    day = parseInt(arguments[2]);

    preYear = year;
    preMonth = month;
    preDay = day;
}
/**
 * function : calculate the day before today;
 * 
 * @param {any} year 
 * @param {any} month 
 * @param {any} day 
 */
var calPreDate = function (year, month, day) {
    if ((year === 1582) && (month === 10) && (day === 15)) {//如果是格里高利历漏洞
        preDay = 4;
        preMonth = 10;
        preYear = 1582;
        return;
    }
    let monthDays = dayOfMonth(year, month, day);
    if ((day <= monthDays) && (day > 1)) {
        preDay = --day;
    } else {
        if ((month <= 12) && (month > 1)) {
            preMonth = --month;
            preDay = dayOfMonth(year, preMonth);
        } else {
            preDay = 31;
            preMonth = 12;
            preYear = --year;
            if (preYear == 0) {
                preYear = -1;
            }
        }
    }
}



var preDate2 = function (Lyear, Lmonth, Lday) {
    getDate(Lyear, Lmonth, Lday);
    calPreDate(year, month, day);
    // console.log(`${preYear}-${preMonth}-${preDay}`);
    return [preYear, preMonth, preDay];
}
module.exports = preDate2;