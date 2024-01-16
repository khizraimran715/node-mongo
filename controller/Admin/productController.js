const productmodel=require('../../model/product')
exports.getaddproduct=(req,res)=>{
    res.render("admin/product/addproduct",{pageTitle:"Add Product"})
}

exports.postaddproduct=(req,res)=>{
    const{name,description,price,imageUrl,bannerimageUrl}=req.body;
    const product={
        name:name,
        description:description,
        price:price,
        imageUrl:imageUrl,
        bannerimageUrl:bannerimageUrl
    }
    productmodel.create(product)
    .then(()=>{
        res.redirect("/products");
    })
    .catch((err)=>{
      res.redirect("/addproduct")  
    });  
}

exports.geteditproduct=(req,res)=>{
    const productid=req.params.productid;
    productmodel.findById(productid)
    .then((product)=>{
      res.render("admin/product/editproduct",{pageTitle:"EditProduct",product})  
    })
    .catch((err)=>{
        res.redirect("/addproduct")  
    })
}

exports.posteditproduct=(req,res)=>{
    const{id,name,description,price,imageUrl,bannerimageUrl}=req.body;
    const updatedproduct={
        name:name,
        description:description,
        price:price,
        imageUrl:imageUrl,
        bannerimageUrl:bannerimageUrl
    }
    productmodel.findByIdAndUpdate(id,updatedproduct)
    .then(()=>{
        res.redirect("/products")
    })
    .catch(()=>{
        res.redirect(`/editproduct/${id}`)
    })
}
exports.getdeleteproduct=(req,res)=>{
    const productid=req.params.productid;
    productmodel.findById(productid)
    .then((product)=>{
      res.render("admin/product/deleteproduct",{pageTitle:"Delete Product",product})  
    })
    .catch((err)=>{
        res.redirect("/products")  
    })
}
exports.postdeleteeditproduct=(req,res)=>{
    const productid=req.body.id;
    productmodel.findByIdAndDelete(productid)
    .then(()=>{
      res.redirect("/products") 
    })
    .catch((err)=>{
       console.log('Error')
    })
}