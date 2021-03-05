var barbeiros = require('../bd-teste/bd')

const index = (req, res) => {
  res.render('dash', barbeiros);
}


module.exports = { index };