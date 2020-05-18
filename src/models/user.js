const mongoose = require('mongoose')
const validator = require('validator')
const User = mongoose.model('User', {
 name: {
        type: String,
        required: true,
        trim: true
 },
 id:{
        type: Number,
        required:true,
 }
})

// We can set fields as per requrements here For examples I've created only one extra field


module.exports= User