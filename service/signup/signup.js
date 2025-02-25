const mongoose = require("mongoose");
const user = require("../../models/signup/signup")

const createUser = async(userDetails) => {
    const userInfo = await user.create(userDetails)
    return userInfo;
}

const fetchAllUsers = async (params) => {
    const products = await user.find();
    return products;
}


const deleteUserById = async (userId) => {
    const deletedUser = await user.findByIdAndDelete(userId);

    if (!deletedUser) {
        console.log("User not found!");
    } else {
        console.log("User deleted:", deletedUser);
        return deletedUser;
    }

    
}

    module.exports = {createUser, fetchAllUsers, deleteUserById}
    