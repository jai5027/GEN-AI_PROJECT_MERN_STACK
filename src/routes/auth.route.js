const express = require('express')
const authController = require('../controllers/auth.controller.js')
const authMiddleware = require('../middlewares/auth.middleware.js')

const router = express.Router()

router.post('/register', authController.registerUserController)

router.post('/login', authController.loginUserController)

router.get('/logout', authController.logoutUserController)

router.get('/get-me', authMiddleware.authUser, authController.getMeController)

module.exports = router