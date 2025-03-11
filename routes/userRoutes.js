const express = require('express');
const { getUserController } = require('../controllers/userControllers');
const authMiddlewares = require('../middlewares/authMiddlewares');


const router = express.Router();

//routes
// GET USER || GET
router.get('/getUser', authMiddlewares, getUserController);


module.exports = router;