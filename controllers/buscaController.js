const frases = require('../database/frases.json')

const buscaController = {
    busca: (req,res) => {
        const { busca } = req.body

        const filterBusca = frases.find(frases => frases.frase == busca)
        
        res.render('busca', {filterBusca} )
    }
}

module.exports = buscaController