const auth = (req, res, next)=>{
    
    req.session.userSession? next(): res.redirect("/login")
          
}
module.exports={
    auth,
}