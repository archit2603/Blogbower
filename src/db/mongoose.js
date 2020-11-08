const { request } = require('express')
const mongoose = require('mongoose')
const dotenv = require('dotenv')
dotenv.config()

mongoose.connect(process.env.MONGODB_URL, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false
})