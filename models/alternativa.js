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
        allowNull: false
      },
      tipoId: {
        type: DataTypes.INTEGER,
        allowNull: false
      }
    },
    {
      tableName: 'int_alternativaQuestao',
      timestamps: true
    }
  );

  Alternativa.associate = function (models) {
    this.belongsTo(models.Tipo, { as: 'tipo', sourceKey: 'id', foreignKey: 'tipoId' });
    this.belongsTo(models.Questao, { as: 'questao', sourceKey: 'id', foreignKey: 'questaoId' });
  }

  return Alternativa
}



