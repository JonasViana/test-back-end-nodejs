const bcrypt = require('bcrypt')
const usuariosModel = require('../database/users.json')

const loginController = {
    index: (req, res) => res.render('login'),
    store: async (req, res) => {
        const { email, senha } = req.body

        const usuario = usuariosModel.find(usuario => usuario.email === email)

        if (!usuario) {
            return res.render('login', { erro: 'Email e/ou senha estão incorretos. Tente novamente' })
        }

        if (!bcrypt.compareSync(senha, usuario.senha)) {
            return res.render('login', { erro: 'Email e/ou senha estão incorretos. Tente novamente' })
        }

        req.session.usuario = usuario

        res.redirect('/main')
    },
    logout: (req, res) => {
        req.session.destroy()

        return res.redirect('/main')
    }
}

module.exports = loginController