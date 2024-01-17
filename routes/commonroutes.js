const express=require('express')
const productcontroller=require('../controller/Common/productController')
const authcontroller=require('../controller/Common/authController')
const routes=express.Router()

routes.get('/productdetail/:productid',productcontroller.getproductdetail);
routes.get('/products',productcontroller.getallproducts);

routes.get('/login',authcontroller.getlogin)
routes.post('/login',authcontroller.postlogin)
routes.get('/logout',authcontroller.logout)
module.exports=routes;