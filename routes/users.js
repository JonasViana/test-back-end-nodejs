var express = require('express');
var router = express.Router();
const UserController = require ('../controllers/UserController.js')

router.post('/criar', UserController.store)

module.exports = router;
