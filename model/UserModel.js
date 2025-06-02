const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    name : {type : String, require : [true, "Please enter your name. "]},
    email : {type : String, require : [true, "Please enter your email."], unique : true},
    password : {type : String, require : [true, "Please enter you password."]}
},
{
    timestamps : true
})

module.exports = require("UserModel", userSchema);