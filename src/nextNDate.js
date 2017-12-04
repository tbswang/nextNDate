// import { WSAESTALE } from 'constants';

/**
 * function: calculate next N date.
 */

var afterNDate = require('./afterNDate');
const preNDate = require('./preNDate');
const inputDateRational = require("./inputDateRational")
const inputNRational = require('./inputNRational')

let year = 0;
let month = 0;
let day = 0;
let nextNYear = 0;
let nextNMonth = 0;
let nextNDay = 0;


//date和n只需要是字符串就可以了
var nextNDate2 = function (date, n) {
    console.log(date, n)
    if (inputDateRational(date) && inputNRational(n)) {
        //date只能是string类型,yyyy/mm/dd,n只能是string的数字.
        [year, month, day] = date.split('/');
        nextNYear = parseInt(year);
        nextNMonth = parseInt(month);
        nextNDay = parseInt(day);
        n = parseInt(n);
        if (n >= 0) {
            [nextNYear, nextNMonth, nextNDay] = afterNDate(year, month, day, n);
        }
        else {
            n = Math.abs(n);
            [nextNYear, nextNMonth, nextNDay] = preNDate(year, month, day, n);
        }
    } else {
        return 'null';
    }
    console.log(`${nextNYear}/${nextNMonth}/${nextNDay}`);
    return `${nextNYear}/${nextNMonth}/${nextNDay}`;
}
module.exports = nextNDate2;