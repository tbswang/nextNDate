var range = Infinity;//定义n这个数可以接收的数的长度

var inputNRational = function (n) {
    let NReg = new RegExp('[0-9]+');
    if (NReg.test(n)) {
        console.log(n)
        return true;
    } else {
        return false;
    }
}
module.exports = inputNRational;