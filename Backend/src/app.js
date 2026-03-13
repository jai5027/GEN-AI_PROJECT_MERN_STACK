const express = require('express')
const router = require('./routes/auth.route.js')
const cookieparser = require('cookie-parser')
const cors = require("cors")

const app = express()
app.use(express.json())
app.use(cookieparser())
app.use(cors({
    origin: "http://localhost:5173",
    credentials: true
}))

app.use('/api/auth', router)

module.exports = app