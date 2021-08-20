const express=require("express");
const routerConfig = require("./routes/index.routes");
require('dotenv').config();
//var cors = require('cors');

const PORT = process.env.PORT || 5000;

const configApi = (app) => {
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
//  app.use(cors());
  return;
}

const configRouter = (app) => {
  app.use("/api/v1/", routerConfig.initUserRoutes());
  app.use("/api/v1/", routerConfig.initSaludosRoutes());
  app.use('/', routerConfig.initAuthRoutes());
  app.use('/', routerConfig.initSaludosRoutes());
};

const init= () => {
  const app = express();
  configApi(app);
  configRouter (app);
  app.listen(PORT);
  console.log("La aplicacion atiende en el puerto" + PORT);
}

init();
