const dbConfig = require("../config");

const Sequelize = require("sequelize");

const modules = [
	require('./user')
];

const mssequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  dialectOptions: {
		encrypt: true,
		connectTimeout: 150000,
		options: {
		// operatorsAliases: true,
		trustServerCertificate: true,
		instanceName: "",
		requestTimeout: 1500000
		},
	},
	logging: false,
  // timezone : "YYYY-MM-DD",
  // pool: {
  //   max: dbConfig.pool.max,
  //   min: dbConfig.pool.min,
  //   acquire: dbConfig.pool.acquire,
  //   idle: dbConfig.pool.idle
  // }
});
mssequelize
  .authenticate()
  .then(() => {
    console.log('SQL Server running');
  })
  .catch(err => {
	// console.log(dbConfig.HOST);
    console.error(`something wrong with connecting SQL Server, ${err}`);
  });

const db = {};

modules.forEach(module => {
	let model;
	model = module(mssequelize, Sequelize);
	db[model.name] = model;
});

Object.keys(db).forEach(modelName => {
	if ('associate' in db[modelName]) {
		db[modelName].associate(db);
	}
});


db.Sequelize = Sequelize;
db.mssequelize = mssequelize;

module.exports = db;