const { Sequelize, DataTypes } = require('sequelize');
const _Alternativa = require('./alternativa')
const _Categoria = require('./categoria')
const _Tipo = require('./tipo')
const _Questionario = require('./questionario')
const _Questao = require('./questao')
const _RespostaQuestionario = require('./respostaQuestionario')
const _Usuario = require('./usuario')

let database = {};

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
let RespostaQuestionario = _RespostaQuestionario(sequelize, DataTypes);
let Usuario = _Usuario(sequelize, DataTypes);

Categoria.hasMany(Questionario, { foreignKey: 'categoriaId' })
Tipo.hasMany(Alternativa, { foreignKey: 'tipoId' })
Questionario.belongsTo(Categoria, { as: 'categoria', sourceKey: 'id', foreignKey: 'categoriaId' });
Questionario.hasMany(Questao, { as: 'questoes', foreignKey: 'questionarioId' });
Questao.hasMany(Alternativa, { as: 'alternativas', foreignKey: 'questaoId' });
Questao.belongsTo(Questionario, { foreignKey: 'questionarioId', sourceKey: 'id' });
Alternativa.belongsTo(Tipo, { sourceKey: 'id', foreignKey: 'tipoId' });
Alternativa.belongsTo(Questao, { sourceKey: 'id', foreignKey: 'questaoId' });
RespostaQuestionario.belongsTo(Questao, { as: 'questoes', sourceKey: 'id', foreignKey: 'questaoId' });
RespostaQuestionario.belongsTo(Alternativa, { sourceKey: 'id', foreignKey: 'alternativaId' });

// database['Alternativa'] = Alternativa;
// database['Categoria'] = Categoria;
// database['Questionario'] = Questionario;
// database['Questao'] = Questao;
// database['Tipo'] = Tipo;
// database['Usuario'] = Usuario;

database = {
  Alternativa,
  Categoria,
  Tipo,
  Questionario,
  Questao,
  RespostaQuestionario,
  Usuario
};

database.sequelize = sequelize

module.exports = database