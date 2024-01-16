const express=require('express')
const productcontroller=require('../controller/Admin/productController')
const routes=express.Router()


routes.get('/addproduct',productcontroller.getaddproduct)
routes.post('/addproduct',productcontroller.postaddproduct)
routes.get('/editproduct/:productid',productcontroller.geteditproduct)
routes.post('/editproduct',productcontroller.posteditproduct)
routes.get('/deleteproduct/:productid',productcontroller.getdeleteproduct)
routes.post('/deleteproduct',productcontroller.postdeleteeditproduct)


module.exports=routes;
