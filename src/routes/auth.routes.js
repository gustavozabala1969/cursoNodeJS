const authRouter = require("express").Router();
const { login , registrarse } = require("../controller/auth.controller");

authRouter.post("/login", login);
authRouter.post("/registrarse", registrarse);

module.exports = authRouter;