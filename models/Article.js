const mongoose = require('mongoose');


const ArticleSchema = new mongoose.Schema({
    title : {
        type : String,
        required : [true, 'Must provide a title ! '],
        trim: true,
        length: [25, 'title can not be more than 25 characters']
    },
    description: {
        type : String,
        required : [true, 'Must provide a description  ! '],
        trim: true
    },
    moredetails: {
        type : String,
        required: [true, 'More detailes require ! '],
        trim: true
    },
    image: {
        type : String,
        trim: true,
        default : 'https://tint.creativemarket.com/Wn5-AGBZ9zMn8avFhqwqEImQ5yptuYDBIVCMh72Gd5g/width:1160/height:772/gravity:nowe/rt:fill-down/el:1/czM6Ly9maWxlcy5jcmVhdGl2ZW1hcmtldC5jb20vaW1hZ2VzL3NjcmVlbnNob3RzL3Byb2R1Y3RzLzE0MS8xNDE5LzE0MTkzMTAvY2FyLWVuZ2luZS1pY29uLTAxLW8uanBn?1467542632'
    },
    tags: {
        type : String,
        trim : true
    },
    email: {
        type : String,
        required : [true, 'Must provide an email ! '],
        trim : true
    },
    rating: {
        type : Number
    },
    users: {
        type : Number,
        default : 0
    },
    date : {
        type : Date
    }
})

module.exports = mongoose.model('Article', ArticleSchema);