const mongoose = require('mongoose')

const portfolio_schema = new mongoose.Schema({
    user_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    item_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Item'
    },
    quantity: {
        type: Number,
        default: () => {
            return 1;
        }
    },
    price: {
        type: Number,
        default: () => {
            return 0;
        }
    }
}, {
    timestamp: true
});

module.exports = mongoose.model("Portfolio", portfolio_schema)