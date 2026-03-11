const jwt = require('jsonwebtoken')
const tokenblacklistModel = require('../models/blacklist.model.js')

async function authUser(req, res, next){
    const token = req.cookies.token

    if(!token){
        return res.status(401).json({
            message: "Token not provided"
        })
    }

    const isTokenblacklisted = await tokenblacklistModel.findOne({ token })

    if(isTokenblacklisted){
        return res.status(401).json({
            message: "Token is Invalid"
        })
    }

    try {
        
        const decoded = jwt.verify(token, process.env.JWT_SECRET)

        req.user = decoded
        next()

    } catch (error) {

        return res.status(401).json({
            message: "Invalid Token"
        })
        
    }
}

module.exports = { authUser }