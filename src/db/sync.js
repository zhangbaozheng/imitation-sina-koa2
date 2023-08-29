/**
 * @description sequelize 同步数据
 */
const seq = require('./seq')

// require('./model')

//TEST_LINK
seq.authenticate()
    .then(() => {
        console.log('success')
    }).catch(() => {
        console.log('err')
    })


//同步
seq.sync({ force: true }).then(() => {
    console.log('sync ok')
    process.exit()
})
