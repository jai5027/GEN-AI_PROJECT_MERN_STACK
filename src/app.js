const express = require('express')
const router = require('./routes/auth.route.js')
const cookieparser = require('cookie-parser')

const app = express()
app.use(express.json())
app.use(cookieparser())

app.use('/api/auth', router)

module.exports = app