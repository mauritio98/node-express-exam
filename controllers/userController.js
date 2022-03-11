import userModel from "../models/userModel.js";


const registerUser = (req, res, next) => {
    console.log("UserController");
    const users = userModel.registerUser(req, res, next);
    res.json(users);
}

const loginUser = (req, res, next) => {
    console.log("UserController");
    const users = userModel.loginUser(req, res, next);
    //imprime el usuario que existe
    res.send(users)
    
}

export default {
    registerUser,
    loginUser
}