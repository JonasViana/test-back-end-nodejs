let frases = require ('../database/frases.json')
const fs = require('fs')

let postController = {
    criar: (req,res) =>{
       const usuario = req.session.usuario 

       if(!usuario){
        return res.render('post', {erro:'Faça o login para postar suas frases'})
       }

        const {frase} = req.body 

        const novaFrase = {
            frase
        }

        frases.push(novaFrase)

        fs.writeFileSync(__dirname + '/../database/frases.json', JSON.stringify(frases))

    res.redirect('/main')
    },

    like:(req,res) => {

    }
}

module.exports = postController