const mongo = require('mongoose')

const item_schema = mongo.Schema({
    name: {
        type: String,
        required: true
    },
    symbol: {
        type: String,
        required: true
    },
    volume: {
        type: Number
    },
    category: {
        type: String,
        required: true
    },
    price: {
        type: Number,
    }
})

module.exports = mongo.model('Item', item_schema);