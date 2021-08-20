const saludosRouter = require("express").Router();

saludosRouter.get("/", (req, res) => {
    // const {name} = req.param;
    res.send("bienvenido entro al get");
});

saludosRouter.post("/", (req, res) => {
    const {name} = req.body;
    res.send("bienvenido" + name);
});

module.exports = saludosRouter;