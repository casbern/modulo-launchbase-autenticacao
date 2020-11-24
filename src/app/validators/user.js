const User = require('../models/user')

async function post(req,res,next) {
  //check if it has all the fields filled
  const keys = Object.keys(req.body)
  console.log('req.body', req.body)

  for(key of keys) {
    if(req.body[key] == "") {
      return res.send('Please, fill all the fields.')
    }
  }

  //check if the user exists 
  let { email, cpf_cnpj, password, passwordRepeat } = req.body
  
  cpf_cnpj = cpf_cnpj.replace(/\D/g, "")
  
  const user = await User.findOne({
    where: {email},
    or: {cpf_cnpj}
  })

  if(user) return res.send('User already exists')

  //check if password match
  if(password != passwordRepeat) {
    return res.send("Passwords are not equal")
  } 

  next()
}

module.exports = { post }