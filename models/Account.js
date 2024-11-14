const mongoose = require('mongoose');


const AccountSchema = new mongoose.Schema({
    phonenumber : {
        type: String,
        required : [true, 'Must provide a phone number !'],
        trim: true,
        length: [8, 'phone number has to be composed out of 8 digits ! ']
    },
    password : {
        type: String,
        required : [true, 'Must provide a password ! '],
        trim: true,
        minlength: [8, 'password can not be less than 8 characters !'],
        maxlength: [20, 'password can not be more than 20 characters !']
    },
    fullname : {
        type: String,
        required : [true, 'Must provide a full name ! '],
        trim : true,
        minlength: [6, 'full name can not be less than 6 characters ! '],
        maxlength: [40, 'full name can not be more than 40 characters ! ']
    },
    email : {
        type: String,
        required : [true, 'Must provide an email ! '],
        trim : true,
        maxlength : [40, 'email can not be more than 40 characters ! ']
    },
    owner : {
        type: Boolean,
        default : false
    }
})

module.exports = mongoose.model('Account', AccountSchema);