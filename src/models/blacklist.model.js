const mongoose = require('mongoose')

const blacklistToken = new mongoose.Schema({
    token: {
        type: String,
        required: [true, "Token is required for blacklist"]
    }
}, {
    timestamps: true
})

const tokenblacklistModel = mongoose.model("blacklistTokens", blacklistToken)

module.exports = tokenblacklistModel