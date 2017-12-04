/**
 * 功能: 确保输入的数据在合理范围内
 * 例子: 年份不能有0, ad是正数, bc是负数.; 月份,取值1-12, 且为整数; 日期: 符合闰年和月份的前提.下, 取值1-daysOfMonth;
 * input: year, month, day
 * output: boolean
 */
var daysOfMonth = require('./daysOfMonth');



//判定输入的格式是不是正确的
var inputDateRational2 = function (date) {
    let year = 0;
    let month = 0;
    let day = 0;
    console.log("inputDateRational2")
    let dateReg = new RegExp('^(-*[0-9]{1,4}/[0-9]{1,2}/[0-9]{1,2})$');
    if (dateReg.test(date)) {//如果符合yyyy/mm/dd的格式
        console.log("reg pass")
        date = date.split('/');
        year = date[0];
        month = date[1];
        day = date[2];
        console.log(year, month, day)
        year = parseInt(year);
        month = parseInt(month);
        day = parseInt(day);
        if ((year === 1582) && (month === 10) && (day <= 14) && (day >= 5)) {
            return false;
        }
        var monthDays = daysOfMonth(year, month);
        // console.log(monthDays);
        if (year === 0) {
            return false;
        } else {
            if ((month < 1) || (month > 12)) {
                return false;
            } else {
                if ((day < 1) || (day > monthDays)) {
                    return false;
                }
            }
        }
        return true;
    } else {
        console.log('reg fail')
        return false;
    }
}
module.exports = inputDateRational2;
// inputDateRational(2011, 11, 32);