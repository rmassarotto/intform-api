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
        allowNull: false,
        references: {
          model: 'questionario',
          key: 'id'
        }
      }
    },
    {
      tableName: 'int_questaoQuestionario',
      timestamps: true
    }
  );

  return Questao
}



