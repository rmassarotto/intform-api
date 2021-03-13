module.exports = function (sequelize, DataTypes) {
  const AlternativaQuestao = sequelize.define(
    'alternativaQuestao',
    {
      alternativaId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true
      },
      questaoId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true
      }
    },
    {
      tableName: 'alternativaQuestao',
      timestamps: false
    }
  );

  AlternativaQuestao.associate = function (models) {
    this.belongsTo(models.Alternativa, { foreignKey: 'alternativaId', sourceKey: 'id' });
    this.belongsTo(models.Questao, { foreignKey: 'questaoId', sourceKey: 'id' });
  };

  return AlternativaQuestao;
};