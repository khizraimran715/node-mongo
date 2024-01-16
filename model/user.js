const mongoose = require('mongoose');

const userSchema=new mongoose.Schema({
    firstName:{
        type:String,
        required:true
    },
    lastName:{
        type:String,
        required:false
    },
    UserName: {
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    passwordhash:{
        type:String,
        required:true
    },
    role:[{
        type: String, // Define possible roles
        default: ['user'] // Set a default role if not specified
      }]
})
module.exports=mongoose.model("user",userSchema);