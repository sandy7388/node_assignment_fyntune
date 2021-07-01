const mongoose = require("mongoose");

const usersSchema = mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    mobile: {
        type: Number,
        require: true
    },
    email: {
        type: String,
        require: true
    },
    password: {
        type: String,
        require: true
    }
});

const Users = mongoose.model('users', usersSchema)
exports.Users = Users

exports.usersSchema = usersSchema