module.exports = {
  HOST: "servername",
  USER: "User",
  PASSWORD: "pass",
  DB: "DBname",
  dialect: "mssql",
  dialectOptions: {
    encrypt: true,
    options: {
      instanceName: ""
    }
  },
  logging: false
  // pool: {
  //   max: 5,
  //   min: 0,
  //   acquire: 30000,
  //   idle: 10000
  // }
};