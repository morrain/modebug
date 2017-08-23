/**
 * 程序入口文件
 */

if (typeof process !== 'undefined' && process.type === 'renderer') {
  module.exports = require('./src/browser.js');
} else {
  module.exports = require('./src/node.js');
}
