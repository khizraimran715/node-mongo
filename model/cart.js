const mongoose = require('mongoose');

const cartSchema=new mongoose.Schema({
    userId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'user',
        required: true
    },// one to one relation
    items:[{  //  items:[{product:798712389712837,quantity:6},{product:798712389712837,quantity:6}]
        productId:{
            type:mongoose.Schema.Types.ObjectId,
            ref:'prodcut',
            required: true
            },
        quantity: {
            type: Number,
            default: 1
            }
    }], // one to many relation   
})

module.exports=mongoose.model('cart',cartSchema);