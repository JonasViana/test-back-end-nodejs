var express = require('express');
const loginController = require('../controllers/loginController');
var router = express.Router();

router.get('/', function(req, res, next) {
   res.render('main' , {usuario:req.session.usuario});
});

router.get('/logout', loginController.logout)

module.exports = router;