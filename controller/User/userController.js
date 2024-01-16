const usermodel=require('../../model/user')


exports.getcreateuser=(req,res)=>{
    res.render('user/user/register',{pageTitle:'Register'})
}
exports.postcreateuser=(req,res)=>{
    const {firstName,lastName,UserName,email,passwordhash}=req.body;
    const user={firstName,lastName,UserName,email,passwordhash};
    usermodel.create(user)
    .then(()=>{
        res.redirect('/login')
    })
    .catch(()=>{
        res.redirect('/register')
    })
}
