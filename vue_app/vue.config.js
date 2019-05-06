const path = require('path')
const webpack = require('webpack')

console.log('')
console.log('本地启动或构建的文件信息 | 开始--------------------------------------------------------------')

if (process.env.WORK_ENV == 'dev') {
    module.exports = require('./conf/webpack.dev.conf')
}else if (process.env.WORK_ENV == 'test') {
    module.exports = require('./conf/webpack.test.conf')
}else if (process.env.WORK_ENV == 'prd') {
    module.exports = require('./conf/webpack.prd.conf')
}else {
    //抛异常
}

