# how to use
## first , you need to install mocha and istanbul
```bash
npm install mocha istanbul -g
```
## second , install the package 
```bash
npm install
```
## last, run
```bash
npm run reporter
```


## get result 
the coverage is written in the "result.xlsx" .And, you can also open the html file in coverage folder

## 说明

* 测试用例excel的格式参考已经给出的excel文件.表的第一行要有[date],[n],[output]

* 使用其他的测试用例
需要在 nextNDate.test.js中把要测试的文件名放进去, 
```javascript
var testcaseFile = path.resolve("[文件名]");
```
* 关于闰年的判断
公元前的闰年判断方法不太明确, 这里采用[wiki](https://zh.wikipedia.org/wiki/%E9%97%B0%E5%B9%B4)的说法.
如果要修改, 可以直接修改[isLeapYear.js](./src/isLeapYear.js)