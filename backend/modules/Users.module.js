const mongoose = require("mongoose")


const UserSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true,
        unique: false
    },
    password: {
        type: String,
        required: true,
        unique: false
    },
    age: {
        type: Number,
        required: true,
        unique: false
    },

},{
    timestamps:true
})


const User = mongoose.model('User', UserSchema);

module.exports  = User