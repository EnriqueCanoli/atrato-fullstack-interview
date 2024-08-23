const servicesUser = require("../services/servicesUser")

const getUsersControllers = async (req, res) => {
    try {
        const users = await servicesUser.getUsers()
        res.status(200).json(users)
    } catch (error) {
        res.status(500).json({ error: `get users error ${error}` })
    }
}


const addUserController = async (req, res) => {
    try {
        const newUser = req.body
        const addedUser = await servicesUser.addUser(newUser)
        res.status(201).json(addedUser)
    } catch (error) {
        res.status(500).json({ error: `add user error ${error}` })
    }
}


const updateUserController = async (req, res) => {
    try {
        const userId = parseInt(req.params.id, 10)
        const updatedData = req.body
        const updatedUser = await servicesUser.updateUser(userId, updatedData)
        res.status(200).json(updatedUser)
    } catch (error) {
        res.status(500).json({ error: `update user error ${error}` })
    }
}


const deleteUserController = async (req, res) => {
    try {
        const userId = parseInt(req.params.id, 10)
        await servicesUser.deleteUser(userId)
        res.status(200).json({ message: 'User deleted successfully' })
    } catch (error) {
        res.status(500).json({ error: `delete user error ${error}` })
    }
}

module.exports = {getUsersControllers,addUserController, updateUserController,   deleteUserController }
