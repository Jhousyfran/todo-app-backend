const mongoose = require('mongoose')
mongoose.Promise = global.Promise

const { DB_HOST, DB_PORT, DB_NAME } = process.env
module.exports = mongoose.connect(
    `mongodb://${DB_HOST}:${DB_PORT}/${DB_NAME}`)

mongoose.connection.on('error', () => console.error('connection error:'))
mongoose.connection.once('open', () => console.log('database connected'))