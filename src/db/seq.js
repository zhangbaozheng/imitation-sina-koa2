/**
 * @description sequelize 实例
 * @author bao
 */

const Sequelize = require('sequelize')
const { MYSQL_CONFIG } = require('./config/db.js')
const { isProd, isTest } = require('./utils/env.js')

const { user, host, database, password } = MYSQL_CONFIG

const config = {
    host,
    dialect: 'mysql'
}

if(isTest) {
    config.logging = () => {}
}

if (isProd) {
    config.pool = {
        max: 5, //连接池 最大连接数量，
        min: 0, //最小
        idle: 10000 //如果一个连接池 10s 之内没有使用就被释放
    }
}


const seq = new Sequelize(database, user, password, config)

module.exports = seq
