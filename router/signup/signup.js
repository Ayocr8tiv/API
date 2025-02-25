const express = require("express");

const {createUserController, createAllUserController, deleteUserByIdController} = require("../../controllers/signup/signup");

const router = express.Router();

router.post('/sign-up', createUserController)
router.get('/all-users', createAllUserController)
router.delete('/delete-user/:userId', deleteUserByIdController)

module.exports = router;