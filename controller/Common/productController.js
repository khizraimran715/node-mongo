const productmodel=require('../../model/product')

exports.getproductdetail=(req,res)=>{
    const productid=req.params.productid;
    productmodel.findById(productid)
    .then((product)=>{
        res.render("common/productdetail",{pageTitle:'Productdetail',product})
    })
    .catch((err)=>{
        res.redirect('/products')
    });


}
exports.getallproducts=(req,res)=>{
    productmodel.find()
    .then((products)=>{
        res.render('common/product-list',{pageTitle:'products',products})
    })
    .catch((err)=>{
        console.log(err)
    })
    ;
}