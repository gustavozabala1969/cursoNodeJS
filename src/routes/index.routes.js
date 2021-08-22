const { Router } = require("express");
const userRoutes = require("./users.routes");
// const saludosRoutes = require("./saludos.routes");
const authRoutes = require("./auth.routes");
// const isValido = require('../middleware/middlewares').isValido;

const initUserRoutes = () => {
    const router = Router();
    // si deseo contralar todas las operaciones si es valido (input "valido" en el form)
    // router.use("/users", [isValido], userRoutes);
    router.use("/users", userRoutes);
    return router;
}

/*
const initSaludosRoutes = () => {
    const router = Router();
    router.get("/", (req,res)=>res.send("WELCOME TO THE API - !!!"));
    router.get("/sal", (req,res)=>res.send("BIENVENIDO SAL- !!!"));
    router.use("/saludos", saludosRoutes);
    return router;
}*/

const initAuthRoutes = () => {
    const router = Router();
    router.get("/", (req,res)=>res.send("BIENVENIDO AUT- !!!"));
    router.use("/auth", authRoutes);
    return router;
}

module.exports = { initUserRoutes, initAuthRoutes }; 