const modelsIndex = require('../models/modelsIndex')

const index = (req, res)=>{
    res.render('index')
}


const saveUser = (req, res)=>{
    modelsIndex.saveUser(req.body)
    res.redirect('login')
}


module.exports = {
    index,
    saveUser,
    
}