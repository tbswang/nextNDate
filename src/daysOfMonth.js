/**
 * function: get the number of day in a month;
 * time: 2017-12-01 13:24:23
 * input: year , month
 */

const isLeapYear = require("./isLeapYear");
var daysOfMonth = function (year, month) {
    if (!year || !month) {
        console.log("Input Error")
        return "Input Error";
    }
    this.month = parseInt(month);
    this.year = parseInt(year);

    switch (month) {
        case 1:
        case 3:
        case 5:
        case 7:
        case 8:
        case 10:
        case 12:
            days = 31;
            return days;
            break;
        case 4:
        case 6:
        case 9:
        case 11:
            days = 30;
            // console.log(days);
            return days;
            break;
        case 2:
            if (isLeapYear(year)) {
                days = 29;
                return days;
            } else {
                days = 28;
                return days;
            }
    }
    // console.log(days);
    // return days;

}

module.exports = daysOfMonth;
// daysOfMonth(2011, 10)
