const { Sequelize, DataTypes } = require('sequelize');
const _Alternativa = require('./alternativa')
const _Categoria = require('./categoria')
const _Tipo = require('./tipo')
const _Questionario = require('./questionario')
const _Questao = require('./questao')
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
let Categoria = _Categoria(sequelize, DataTypes);
let Tipo = _Tipo(sequelize, DataTypes);
let Questionario = _Questionario(sequelize, DataTypes);
let Questao = _Questao(sequelize, DataTypes);
// let Checklist = _Checklist(sequelize, DataTypes);

database['Alternativa'] = Alternativa;
database['Categoria'] = Categoria;
database['Questionario'] = Questionario;
database['Questao'] = Questao;
database['Tipo'] = Tipo;
// database['Nota'] = Nota;
// database['Tag'] = Tag;
// database['Checklist'] = Checklist;

// Usuario.findAll().then((result) => console.log(result))

database.sequelize = sequelize

module.exports = database