const express=require("express");
var cors = require('cors');
const routerConfig = require("./routes/index.routes");
require('dotenv').config();

const PORT = process.env.PORT || 5000;

const configApi = (app) => {
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
  app.use(cors());
  return;
}

const configRouter = (app) => {
  app.use("/api/v1/", routerConfig.initUserRoutes());
  // app.use("/api/v1/", routerConfig.initSaludosRoutes());
  app.use('/', routerConfig.initAuthRoutes());
  // app.use('/', routerConfig.initSaludosRoutes());
};

const configHeaders = (app) => {
  app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Allow', 'GET, POST, PUT, DELETE, OPTIONS');
    next();
  });
};

const init= () => {
  const app = express();
  configApi(app);
  configRouter (app);
  configHeaders(app);
  app.listen(PORT);
  console.log("La aplicacion atiende en el puerto" + PORT);
}

init();
