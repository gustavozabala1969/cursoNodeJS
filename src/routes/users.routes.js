const userRouter = require("express").Router();
const isValido = require('../middleware/middlewares').isValido;
const { getUsers, addUser, deleteUser, updateUser } = require('../controller/user.controller')

userRouter.get("/", [isValido], getUsers);
/*userRouter.get('/', function (req, res, getUsers) {
    // if the user ID is 0, skip to the next route
    if (req.params.isValid == 1) return next();
    return res.status(401).send({
        message: "Acceso no valido",
      });
  });
*/

userRouter.post("/", [isValido], addUser);
userRouter.delete("/:id", deleteUser);
userRouter.put("/:id",updateUser);

module.exports = userRouter;
