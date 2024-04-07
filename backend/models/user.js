const mongoose = require('mongoose');



const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    rollNo: {
        type: String,
        required: true,
        unique: true
    },
    program: {
        type: String,
        required: true
    },
    year: {
        type: Number,
        required: true
    },
    branch: {
        type: String,
        required: true
    },
    accountNo: {
        type: String
    },
    IFSC: {
        type: String
    }
});

const User = mongoose.model('User', userSchema);

module.exports = User;