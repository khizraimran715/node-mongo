const cartmodel=require('../../model/cart')
exports.getcart= async(req,res)=>{
    const userid='6595918be554a615a68ec634';
    const cart=await cartmodel.findOne({userId:userid}).populate({
        path: 'items.productId',
        model:'product'
    });
    //res.json(cart.items);
    res.render('user/cart/cart',{pageTitle:"cart", cartitems:cart.items})
}
exports.addtocart=async(req,res)=>{
    const userid='6595918be554a615a68ec634';
    const productid=req.params.productid;
    const cart= await cartmodel.findOne({userId:userid});
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
        cartmodel.create(cart)
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
const userid='6595918be554a615a68ec634';
const cart=await cartmodel.findOne({userId:userid});
if (cart) {
    cart.items=cart.items.filter(x=>x.productId.toString()!==productid);
    await cart.save()
    res.redirect('/cart')

}
else{
res.redirect('/products')
}
}
