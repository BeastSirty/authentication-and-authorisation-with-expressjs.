const express = require('express');
const router = express.Router();//change handler to this router
const authentication = require('../service/security/authentication');

//DB Files
const adminController = require('../controllers/adminController');
const authorisation = require('../service/security/authorisation');
const tokenVerification = require('../service/security/authentication');

//Route
router.get('/user',tokenVerification, authorisation("admin"),  (req, res) => adminController.load_platform_users(req, res))
router.put('/user/id/:user_id',tokenVerification, authorisation("admin"),  (req, res) => adminController.update_user_profile(req, res))
router.get('/user/id/:user_id',tokenVerification, authorisation("admin"),  (req, res) => adminController.load_user_profile_by_id(req, res))

module.exports = router;
// ,