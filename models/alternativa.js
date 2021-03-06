module.exports = function (sequelize, DataTypes) {
  const Alternativa = sequelize.define('alternativa',
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
      },
      texto: {
        type: DataTypes.STRING,
        allowNull: false
      },
      questaoId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'questao',
          key: 'id'
        }
      },
      tipoId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'tipo',
          key: 'id'
        }
      }
    },
    {
      tableName: 'int_alternativaQuestao',
      timestamps: true
    }
  );

  return Alternativa
}



