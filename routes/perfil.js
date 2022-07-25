var express = require('express');
const postController = require('../controllers/postController');
var router = express.Router();
const frases = require("../database/frases.json")
const UserController = require('../controllers/userController')

router.get('/', function (req, res, next) {
  res.render('perfil',  { usuario: req.session.usuario, frases })
});
router.get('/delete/:id', postController.delete);

router.get('/like/:id', postController.like);


module.exports = router;