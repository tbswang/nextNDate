/**
 * function: judge a year is leap or not;
 * @return: boolean
 * @param {*} year 
 * ref: 公元前之闰年出现在1, 5, 9, 13, ... BC，须将年份值减1再以“除以4”计算。（因为没有公元0年这一年，所以公元前1, 2, 3, 4, ... 年应该是公元0, -1, -2, -3, ... 年，而公元前1, 5, 9, 13, ... 年为公元0, -4, -8, -12, ... 年，为4的倍数）https://zh.wikipedia.org/wiki/%E9%97%B0%E5%B9%B4
 */

//公元前用负数表示: 例子: 公元前1年 是-1年
var isLeapYear = function (year) {
    if (year >= 1) {
        if ((year % 4 == 0) && (year % 100 != 0) || (year % 400 == 0))
            return true;
        else
            return false;
    } else if (year <= -1) {
        year = Math.abs(year) - 1;
        if ((year % 4 == 0) && (year % 100 != 0) || (year % 400 == 0)) {
            return true;
        }
        else
            return false;
    }
}
module.exports = isLeapYear;
// isLeapYear(-1)