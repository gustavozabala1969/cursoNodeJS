const middlewares = {

  isValido : function (req, res, next) {
      // return next();
      if (req.body.valido=="S") return next();
      return res.status(401).send({
        message: "Acceso no valido",
      });
  },
};
module.exports = middlewares;
