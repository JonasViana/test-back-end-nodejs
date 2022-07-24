var express = require('express');
const buscaController = require('../controllers/buscaController');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('busca', {usuario:req.session.usuario});
});

router.post('/busca' , buscaController.busca)

module.exports = router;
