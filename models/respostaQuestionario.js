module.exports = function (sequelize, DataTypes) {
  const RespostaQuestionario = sequelize.define('respostaQuestionario',
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
      },
      questaoId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'questao',
          key: 'id'
        }
      },
      alternativaId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'alternativa',
          key: 'id'
        }
      },
      selected: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      usuarioId: {
        type: DataTypes.INTEGER,
        allowNull: true,
        reference: {
          model: 'usuario',
          key: 'id'
        }
      }
    },
    {
      tableName: 'int_respostaQuestionario',
      timestamps: true
    }
  );

  return RespostaQuestionario
}



