let frases = require('../database/frases.json')
const fs = require('fs')

let postController = {
    criar: (req, res) => {
        const usuario = req.session.usuario

        if (!usuario) {
            return res.render('login', { erro: 'Faça o login para postar suas frases' })
        }

        const { frase } = req.body

        const novaFrase = {
            id: frases.length +1 ,
            user:usuario.usuario,
            frase,
            like: 0
        }

        frases.push(novaFrase)

        fs.writeFileSync(__dirname + '/../database/frases.json', JSON.stringify(frases))

        res.redirect('/main')
    },
    delete: (req,res) => {
        const { id } = req.params
        const usuario = req.session.usuario
        const deleteFrase = frases.filter(frases=> frases.user == usuario.usuario)
        const filterFrase = deleteFrase.find(frase => frase.id == id)
        delete filterFrase.frase
        delete filterFrase.user
        delete filterFrase.id
        res.render('perfil', { usuario: req.session.usuario, frases })
    },
    like: (req,res) => {
        const { id } = req.params
        const usuario = req.session.usuario
        if(!usuario) {
            return res.render('login', { erro: 'Faça o login para curtir frases'} )
        }
        const frase = frases.filter(frases=> frases.id == id)
        const likeFrase = frase.find(frase => frase.id == id)
        likeFrase.like = likeFrase.like +1
        res.render('main', { usuario: req.session.usuario, frases })
    }
}

module.exports = postController