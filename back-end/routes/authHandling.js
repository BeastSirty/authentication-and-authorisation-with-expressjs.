const express = require('express');
const router = express.Router();//change handler to this router
const authentication = require('../service/security/authentication');

//DB Files
const authController = require('../controllers/authController');
const authorisation = require('../service/security/authorisation');
const tokenVerification = require('../service/security/authentication');

//Route
router.post('/login', (req, res) => authController.login(req, res))
router.post('/logout', (req, res) => authController.logout(req, res))
router.post('/register', (req, res) => authController.register(req, res))

router.get('/user', tokenVerification, authorisation("user"), (req, res) => authController.load_user_profile(req, res))
router.put('/user',  tokenVerification, authorisation("user"),(req, res) => authController.update_user_profile(req, res))
router.delete('/delete/user', tokenVerification, authorisation("user"), (req, res) => authController.delete_user_profile(req, res))

module.exports = router;
// 