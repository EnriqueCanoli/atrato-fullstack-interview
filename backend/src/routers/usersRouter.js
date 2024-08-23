const { Router } = require("express")
const usersController = require("../controllers/usersControllers")

const usersRouter = Router(); // Fix: Naming consistency

usersRouter.get("/", usersController.getUsersControllers)

usersRouter.post("/",  usersController.addUserController)

usersRouter.delete("/:id",  usersController.deleteUserController)

usersRouter.put("/:id",  usersController.updateUserController)

module.exports = usersRouter
