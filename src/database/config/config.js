require("dotenv").config();
const { DATABASE_URL } = process.env;
const { DB_USERNAME, DB_PASSWORD, DB_NAME } = process.env;

// las constantes del .env son:
//DB_USERNAME="postgres"
//DB_PASSWORD="admin"
//DB_NAME="CursoNodeJS"
//DATABASE_URL="postgres://postgres:admin@127.0.0.1/CursoNodeJS"

module.exports = {
  development: {
    // url: DATABASE_URL,
    username: DB_USERNAME,
    password: DB_PASSWORD,
    database: DB_NAME,
    host: "127.0.0.1",
    dialect: "postgres"
  },
  test: {
    username: "root",
    password: null,
    database: "database_test",
    host: "127.0.0.1",
    dialect: "postgres"
  },
  production: {
    username: "root",
    password: null,
    database: "database_production",
    host: "127.0.0.1",
    dialect: "postgres",
    dialectOptions: {
      ssl: {
        required: true,
        rejectUnauthorized: false,
      },
    },
  }
};

/* module.exports = {
  development: {
    username: DB_USERNAME,
    password: DB_PASSWORD,
    database: DB_NAME,
    host: "127.0.0.1",
    dialect: "postgres"
  },
  test: {
    username: "root",
    password: null,
    database: "database_test",
    host: "127.0.0.1",
    dialect: "postgres"
  },
  production: {
    username: "root",
    password: null,
    database: "database_production",
    host: "127.0.0.1",
    dialect: "postgres",
    dialectOptions: {
      ssl: {
        required: true,
        rejectUnauthorized: false,
      },
    },
  }
};
*/