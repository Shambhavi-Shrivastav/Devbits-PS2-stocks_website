
const mongoose = require("mongoose");

const contact_Schema = mongoose.Schema({
    first_name: {
        type: String,
        required: true
    },
    last_name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    mobile: {
        type: Number,
        required: true
    },
    description: {
        type: String,
        required: true
    } 
}, {
    timestamp: true
});

module.exports = new mongoose.model("ContactUs", contact_Schema);