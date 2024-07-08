const userModel = require('../models/user');

exports.createUser = async (req, res) => {
    await userModel.UserModel.create({
        username: req.body.username,
        email: req.body.email,
        password: req.body.password,
    });

    return res.status(201).json({ message: "User Created" });
}

exports.getAllUsers = async (req, res) => {
    const allUsers = await userModel.UserModel.find()

    return res.json(allUsers)
}

exports.getByID = async (req, res) => {
    const user = await userModel.UserModel.findById(req.params.id)

    return res.json(user)
}  

exports.updateUser = async (req, res) => {
    const updatedUser = await userModel.UserModel.findByIdAndUpdate(req.params.id, req.body)
    return res.json(updatedUser)
}

exports.deleteUser = async (req, res) => {
    const deletedUser = await userModel.UserModel.findByIdAndDelete(req.params.id)

    res.json(deletedUser)
}

