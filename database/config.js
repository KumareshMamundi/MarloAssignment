module.exports = {
  HOST: "192.168.10.10",
  USER: "jhaadmin",
  PASSWORD: "admin@jha123",
  DB: "JHA.Development",
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