const express=require('express')
const userController=require('../controller/User/userController')
const cartController=require('../controller/User/cartController')

const routes=express.Router()

routes.get('/register',userController.getcreateuser)
routes.post('/register',userController.postcreateuser)
routes.get('/cart',cartController.getcart)
routes.get('/cart/:productid',cartController.addtocart)
routes.get('/deleteproductfromcart/:productid',cartController.removefromcart)




module.exports=routes;
