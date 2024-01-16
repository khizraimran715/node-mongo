const express=require('express')
const session = require('express-session');
const MongoStore = require('mongoose-express-session')(session);
const path=require('path')
const mongoose = require('mongoose');
const product=require('./model/product')
const user=require('./model/user')
const cart=require('./model/cart')
const adminroutes=require('./routes/adminroutes')
const commonroutes=require('./routes/commonroutes')
const userroutes=require('./routes/userroutes')
const connectionString = 'mongodb://127.0.0.1:27017/Shop';


const rootpath=path.dirname(require.main.filename)
const app=express()
const port=9000

app.set('view engine','ejs')
app.set('views',path.join(rootpath,'views'))
app.use(express.static(path.join(__dirname,"public")));

app.use(express.urlencoded({extended:false}))

const store=new MongoStore({
    connection:mongoose.connection,
    collection:'session'
});

app.use(session({
    secret: '980040',
    resave: false,
    saveUninitialized: false,
    store: store
  }));
  
mongoose.connect(connectionString)
.then(()=>{
    console.log("Database Connected")
    app.use(adminroutes)
    app.use(commonroutes)
    app.use(userroutes)
    app.listen(port,()=>{
        console.log(`Server is listening on ${port}`)
    })
})
.catch((err)=>{
    console.log(err)
});
