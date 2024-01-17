const express=require('express')
const userController=require('../controller/User/userController')
const cartController=require('../controller/User/cartController')
const {isAuthenticated}=require('../middleware/authenticationMiddleware')

const routes=express.Router()

routes.get('/register',userController.getcreateuser)
routes.post('/register',userController.postcreateuser)
routes.get('/cart',isAuthenticated,cartController.getcart)
routes.get('/cart/:productid',isAuthenticated,cartController.addtocart)
routes.get('/deleteproductfromcart/:productid',isAuthenticated,cartController.removefromcart)




module.exports=routes;
