const path = require('path')
const webpack = require('webpack')

console.log('')
console.log('本地启动或构建的文件信息 | 开始--------------------------------------------------------------')

if (process.env === 'dev') {
    module.exports = require('./conf/webpack.dev.conf')
}else if (process.env === 'test') {
    module.exports = require('./conf/webpack.test.conf')
}else if (process.env === 'prd') {
    module.exports = require('./conf/webpack.prd.conf')
}
