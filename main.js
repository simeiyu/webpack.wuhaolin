/*
 * @Author: Si Meiyu
 * @Date: 2018-10-08 16:06:46
 */
// 通过CommonJS规范导入css模块
require('./main.css');
require('./main.less');
// 通过 CommonJS 规范导入 show 函数
const show = require('./show.js');
// 执行 show 函数
show('Webpack V4');