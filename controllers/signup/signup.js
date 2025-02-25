const {createUser, fetchAllUsers, deleteUserById} = require("../../service/signup/signup");

const createUserController = async (req, res) => {
    try {
        const userInfo = await createUser(req.body);
        res.status(201).json({data: userInfo, message: `Account created successfully`, status: true})
    } catch (error) {
        res.status(500).json({ data: error.message, message: `Failed to create account`, status: false })
    }
}

const createAllUserController = async (req, res) => {
    try {
        const userInfo = await fetchAllUsers(req.body);
        res.status(201).json({data: userInfo, message: ` Users fetched successfully`, status: true})
    } catch (error) {
        res.status(500).json({ data: error.message, message: `Failed to fetch users`, status: false })
    }
}

const deleteUserByIdController = async (req, res) => {
    try {
        const userInfo = await deleteUserById(req.params.userId);
        res.status(201).json({data: userInfo, message: ` Users deleted successfully`, status: true})
    } catch (error) {
        res.status(500).json({ data: error.message, message: `Failed to delete users`, status: false })
    }
}

module.exports = {createUserController, createAllUserController, deleteUserByIdController}