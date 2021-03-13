const { Sequelize, DataTypes } = require('sequelize');
// const _Usuario = require('./usuario')
// const _Nota = require('./nota')
// const _Tag = require('./tag')
// const _Checklist = require('./checklist')
const database = {};

const options = {
  username: 'postgres',
  password: '4093047',
  host: 'localhost',
  dialect: 'postgres'
};

const sequelize = new Sequelize(options);

sequelize.authenticate()
  .then(() => console.log(`CONNECTION SUCCESS: ${options.username}`))
  .catch((error) => console.log(`CONNECTION ERROR: ${error}`))

// let Usuario = _Usuario(sequelize, DataTypes);
// let Nota = _Nota(sequelize, DataTypes);
// let Tag = _Tag(sequelize, DataTypes);
// let Checklist = _Checklist(sequelize, DataTypes);

// database['Usuario'] = Usuario;
// database['Nota'] = Nota;
// database['Tag'] = Tag;
// database['Checklist'] = Checklist;

// Usuario.findAll().then((result) => console.log(result))

database.sequelize = sequelize

module.exports = database