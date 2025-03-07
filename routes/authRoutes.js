const express = require('express');
const { registerController, loginController } = require('../controllers/auth.controller');

const router = express.Router();

//routes
//REGIESTER || POST
router.post('/register', registerController);

//LOGIN || POST
router.post('/login', loginController);


module.exports = router;