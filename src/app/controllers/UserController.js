const User = require('../models/User')

module.exports = {
  registerForm(req,res) {
    return res.render("user/register")
  },

  async post(req,res) {
    //check if it has all the fields filled
    const keys = Object.keys(req.body)
    console.log('req.body', req.body)

    for(key of keys) {
      if(req.body[key] == "") {
        return res.send('Please, fill all the fields.')
      }
    }

    //check if the user exists 
    const { email, cpf_cnpj } = req.body
    const user = await User.findOne()
  }
}