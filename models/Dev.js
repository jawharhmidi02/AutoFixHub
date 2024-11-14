const mongoose = require('mongoose');


const DevSchema = new mongoose.Schema({
    username : {
        type : String,
        required : [true, 'Must provde a username ! '],
        trim : true,
    },
    password : {
        type : String,
        required : [true, 'Must provide a password ! '],
        trim : true
    },
    email : {
        type : String,
        required : [true, 'Must provde an email ! '],
        trim : true
    },
    name : {
        type : String,
        required : [true, 'Must provde a Name ! '],
        trim : true
    },
    updatelog : {
        type : String,
        default : "",
        trim : true
    }
})

module.exports = mongoose.model('Dev', DevSchema);