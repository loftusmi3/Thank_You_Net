
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const convoSchema = new Schema ({
    users: {
        type: Array,
        required: true
    },
    messages: [{
        text: String,
        author: String
    }]
})

module.exports = mongoose.model('User', userSchema);