const mongoose = require('mongoose');

const productschema= new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true,
        min: 0
    },
    description:{
        type: String,
    },
    imageUrl:{
        type:String,
        required:false
    },
    bannerimageUrl:{
        type:String,
        required:false
    }
});

module.exports=mongoose.model("product",productschema);//define model in database