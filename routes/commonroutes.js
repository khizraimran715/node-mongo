const express=require('express')
const productcontroller=require('../controller/Common/productController')
const routes=express.Router()

routes.get('/productdetail/:productid',productcontroller.getproductdetail);
routes.get('/products',productcontroller.getallproducts);

module.exports=routes;