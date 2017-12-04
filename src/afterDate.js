/**
 * 2017年11月29日 17:08:01
 * 功能: 在v1的基础上, 使用mocha测试,export一个函数, 接收参数.
 * 
 */

const isLeapYear = require("./isLeapYear");
const inputDateRational = require('./inputDateRational');
const dayOfMonth = require('./daysOfMonth');

//定义全局的日期
let year = '';
let month = '';
let day = '';
let nextYear = 0;
let nextMonth = 0;
let nextDay = 0;

var getDate = function (a, b, c) {
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

    nextYear = year;
    nextMonth = month;
    nextDay = day;
}
/**
 * 功能: 输出下一天
 * 
 * @param {any} year 
 * @param {any} month 
 * @param {any} day 
 */
var calNextDate2 = function (year, month, day) {
    if ((year == 1582) && (month === 10) && (day == 4)) {//如果是格里高利历漏洞
        nextDay = 15;
        nextMonth = 10;
        nextYear = 1582;
        return;
    }
    let monthDays = dayOfMonth(year, month, day);
    if ((day >= 1) && (day < monthDays)) {
        nextDay = ++day;
    } else {
        if ((month >= 1) && (month < 12)) {
            nextDay = 1;
            nextMonth = ++month;
        } else {
            nextDay = 1;
            nextMonth = 1;
            nextYear = ++year;
            if (nextYear === 0) {//没有公元0年
                nextYear = 1;
            }
        }
    }
}

var nextDate2 = function (Lyear, Lmonth, Lday) {
    getDate(Lyear, Lmonth, Lday);
    calNextDate2(year, month, day);
    return [nextYear, nextMonth, nextDay];
}

module.exports = nextDate2;
// nextDate("2011", "11", "21");