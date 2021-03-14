const { Sequelize, DataTypes } = require('sequelize');
const _Alternativa = require('./alternativa')
const _Tipo = require('./tipo')
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

let Alternativa = _Alternativa(sequelize, DataTypes);
let Tipo = _Tipo(sequelize, DataTypes);
// let Nota = _Nota(sequelize, DataTypes);
// let Tag = _Tag(sequelize, DataTypes);
// let Checklist = _Checklist(sequelize, DataTypes);

database['Alternativa'] = Alternativa;
database['Tipo'] = Tipo;
// database['Nota'] = Nota;
// database['Tag'] = Tag;
// database['Checklist'] = Checklist;

// Usuario.findAll().then((result) => console.log(result))

database.sequelize = sequelize

module.exports = database