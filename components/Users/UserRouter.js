const { Authenticate } = require("../../Utils/Middleware");
const { NewUser } = require("./UserController");
const UserRouter = require("express").Router();

UserRouter.post("/new", Authenticate, NewUser);

module.exports = UserRouter