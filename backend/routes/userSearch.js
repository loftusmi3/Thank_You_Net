const express = require('express');
const router = express.Router();
const userSearchController = require('../controllers/userSearchController');

router.patch('/', userSearchController.handleNewConvo);

module.exports = router;