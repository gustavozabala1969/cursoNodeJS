const userRouter = require("express").Router();
const isValido = require('../middleware/middlewares').isValido;
const { getUsers, addUser, deleteUser, updateUser } = require('../controller/user.controller');
const { authJwt } = require("../middleware");

userRouter.get("/", [authJwt.check], getUsers);
userRouter.post("/", [authJwt.check], addUser);
userRouter.delete("/:id", [authJwt.check], deleteUser);
userRouter.put("/:id", [authJwt.check], updateUser);

module.exports = userRouter;
