const { Questionario } = require(".");

module.exports = function (sequelize, DataTypes) {
  const Questao = sequelize.define('questao',
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
      },
      titulo: {
        type: DataTypes.STRING,
        allowNull: false
      },
      questionarioId: {
        type: DataTypes.INTEGER,
        allowNull: false
      }
    },
    {
      tableName: 'int_questaoQuestionario',
      timestamps: true
    }
  );

  Questao.associate = function (models) {
    this.hasMany(models.Alternativa, { as: 'alternativa', foreignKey: 'questaoId' });
    this.belongsTo(models.Questionario, { as: 'questionario', foreignKey: 'questionarioId' });
  }

  return Questao
}



