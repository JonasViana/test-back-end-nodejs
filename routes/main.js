const express = require('express');
const loginController = require('../controllers/loginController');
const router = express.Router();
const frases = require ('../database/frases.json')

router.get('/', function(req, res, next) {
   res.render('main' , { frases, usuario:req.session.usuario} );
});

router.get('/logout', loginController.logout)

module.exports = router;