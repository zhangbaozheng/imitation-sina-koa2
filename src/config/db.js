
const { isProd } = require('./utils/env.js')

let MYSQL_CONFIG = {
    host: 'localhost',
    dialect: 'mysql',
    password: 'zheng123Q',
    port: '3306',
    database: 'koa2-sina'
}

if(isProd) {
    //线上mysql配置
    MYSQL_CONFIG = {
        host: 'localhost',
        user: 'root',
        password: 'zheng123Q',
        port: '3306',
        database: 'koa2-sina'
    }
}

module.exports = {
    MYSQL_CONFIG
}