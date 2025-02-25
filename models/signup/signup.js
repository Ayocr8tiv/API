const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    firstName: {type: String, require: true},
    middleName: {type: String, require: true},
    lastName: {type: String, require: true},
    gender: {type: String, require: true},
    email: {type: String, require: true, unique: true},
    age: {type: Number, require: true},
    address: {type: String, require: true},
    password: {type: String, require: true},
})

module.exports = mongoose.model("user", userSchema)