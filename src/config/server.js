// const port = 3003
const { SERVER_PORT } = process.env

const bodyParser = require('body-parser');
const express = require('express')
const server = express();

server.use(bodyParser.urlencoded({ extended: true }));
server.use(bodyParser.json());

server.listen(SERVER_PORT, function () {
    console.log(`BACKEND is running on port ${SERVER_PORT}`)
})