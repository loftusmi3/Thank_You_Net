const express = require('express');
const router = express.Router();
const usersController = require('../../controllers/usersController');
const ROLES_LIST = require('../../config/roles_list');
const verifyRoles = require('../../middleware/verifyRoles');
const verifyCreatedByIfRole = require('../../middleware/verifyCreatedByIfRole');

router.route('/')
    .get(verifyRoles(ROLES_LIST.Admin), usersController.getAllUsers)
    .delete(verifyRoles(ROLES_LIST.Admin), usersController.deleteUser);

router.route('/:id')
    .get(verifyRoles(ROLES_LIST.Admin, ROLES_LIST.User), verifyCreatedByIfRole(ROLES_LIST.User), usersController.getUser);

router.route('/new-convo')
    .patch(verifyRoles(ROLES_LIST.User), usersController.handleNewConvo)

module.exports = router;