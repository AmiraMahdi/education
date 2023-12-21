// import mongoose module
const mongoose = require("mongoose");
// create user schema 
const userSchema = mongoose.Schema({
    firstName: String,
    lastName: String,
    gender: String,
    email: String,
    password: String,
    address: String,
    speciality: String,
    courses: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Course"
    }],
    tel: Number,
    role: String,
    avatar: String

});
// create User Model
const user = mongoose.model("User", userSchema);
// let user exportable
module.exports = user;