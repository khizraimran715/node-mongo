const cartmodel=require('../../model/cart')
exports.getcart= async(req,res)=>{
    const user=req.session.user;
    const cart=await cartmodel.findOne({userId:user._id}).populate({
        path: 'items.productId',
        model:'product'
    });
    //res.json(cart.items);
    res.render('user/cart/cart',{pageTitle:"cart", cartitems:cart?.items})
}
exports.addtocart=async(req,res)=>{
    const user=req.session.user;
    const productid=req.params.productid;
    const cart= await cartmodel.findOne({userId:user._id});
    if (cart) {
        const item=cart.items.find(x=>x.productId.toString()===productid);
        if (item) {
            item.quantity+=1;
        }
        else{
            const newitem={
                productId:productid
            }
            cart.items.push(newitem)
        }
        await cart.save()
        .then(()=>{
            res.redirect('/cart')
        })
        .catch(()=>{
            res.redirect('/products')
        });  
    }
    else{
        const newcart={
            userId:userid,
            items:{
                productId:productid
            }
        }
        cartmodel.create(newcart)
        .then(()=>{
            res.redirect('/cart')
        })
        .catch(()=>{
            res.redirect('/products')
        })
    }

    
    
}

exports.removefromcart=async (req,res)=>{
const productid=req.params.productid;
const user=req.session.user;
const cart=await cartmodel.findOne({userId:user._id});
if (cart) {
    cart.items=cart.items.filter(x=>x.productId.toString()!==productid);
    await cart.save()
    res.redirect('/cart')

}
else{
res.redirect('/products')
}
}
