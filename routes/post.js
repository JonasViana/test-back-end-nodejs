var express = require('express');
const postController = require('../controllers/postController');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('post' , { usuario:req.session.usuario });
});

router.post('/criar', postController.criar)


module.exports = router;