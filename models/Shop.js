const mongoose = require('mongoose');


const ShopSchema = new mongoose.Schema({
    shopname : {
        type : String,
        required : [true, "Shop name required ! "],
        trim : true,
        maxlength : [25, "Shop name can not be longer than 25 charcaters ! "]
    },
    chiefname : {
        type: String,
        required : [true, 'Must provide a full name ! '],
        trim : true,
        minlength: [6, 'full name can not be less than 6 characters ! '],
        maxlength: [40, 'full name can not be more than 40 characters ! ']
    },
    phonenumber : {
        type: String,
        required : [true, 'Must provide a phone number !'],
        trim: true,
        length: [8, 'phone number has to be composed out of 8 digits ! ']
    },
    email : {
        type: String,
        required : [true, 'Must provide an email ! '],
        trim : true,
        maxlength : [40, 'email can not be more than 40 characters ! ']
    },
    address : {
        type : String,
        required : [true, "Address required ! "],
        trim : true
    },
    articlenum :{
        type : Number,
        default : 0
    }
});

module.exports = mongoose.model("Shop", ShopSchema);