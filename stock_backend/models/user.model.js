
const mongo = require('mongoose')

const user_schema = new mongo.Schema({
    name: {
        type: String,
        required: true
    },
    emailID: {
        type: String,
        required: true,
        lowercase: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    money: {
        type: Number,
        required: true
    }
},
    {
        timestamps: true
    })

module.exports = mongo.model('User', user_schema)