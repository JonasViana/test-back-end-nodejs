const bcrypt = require('bcrypt')
const fs = require('fs')
const usuariosModel = require("../database/users.json")

let UserController = {
    index:(req,res) => res.render('cadastro'),
    store: async (req,res)=>{
       const {usuario, email, senha, confirmarSenha} = req.body
    
    if(senha !== confirmarSenha){
        return res.render('index', {erro: 'Senhas não coincidem'})
    }

    const emailExistente = usuariosModel.some(usuario => usuario.email === email)

    if (emailExistente){
        return res.render('index', {erro:'Email já utilizado , utilize outro'})
    }

    const user = {
        usuario,
        email,
        senha: bcrypt.hashSync(senha, 10)
    }

    usuariosModel.push(user)

    fs.writeFileSync(__dirname + '/../database/users.json', JSON.stringify(usuariosModel))

    res.redirect('/login')
}
}

module.exports = UserController