const usermodel=require('../../model/user')

exports.getlogin=(req,res)=>{
    res.render("common/signin");
}

exports.postlogin=async(req,res)=>{
    const{username,password}=req.body;
    const user=await usermodel.findOne({UserName:username.toLowerCase(),passwordhash:password});
    if (user) { 
        const userWithoutPassword = { ...user._doc };
        delete userWithoutPassword.passwordhash;     
        req.session.user=userWithoutPassword;
        res.redirect('/products')
    }
    else{
        res.redirect('/register')
    }
}

exports.logout=(req,res)=>{
    req.session.destroy((err)=>{
        res.redirect('/login')
    });
}