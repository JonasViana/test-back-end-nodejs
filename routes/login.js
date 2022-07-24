var express = require('express')
var router = express.Router()
var loginController = require ('../controllers/loginController')

/* GET login page. */
router.get('/', function (req, res, next) {
  res.render('login', {usuario:req.session.usuario})
})

router.post("/", loginController.store)

module.exports = router
