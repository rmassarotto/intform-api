module.exports = function (sequelize, DataTypes) {
  const QuestionarioQuestao = sequelize.define(
    'questionarioQuestao',
    {
      questionarioId: {
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
      tableName: 'questionarioQuestao',
      timestamps: false
    }
  );

  QuestionarioQuestao.associate = function (models) {
    this.belongsTo(models.Questionario, { foreignKey: 'questionarioId', sourceKey: 'id' });
    this.belongsTo(models.Questao, { foreignKey: 'questaoId', sourceKey: 'id' });
  };

  return QuestionarioQuestao;
};