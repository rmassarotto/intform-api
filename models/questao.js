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
        type: DataTypes.INTEGER,
        allowNull: false
      }
    },
    {
      tableName: 'questao',
      timestamps: true
    }
  );

  Questionario.associate = function (models) {
    this.hasMany(models.AlternativaQuestao, { foreignKey: 'questaoId' });
    this.belongsTo(models.QuestionarioQuestao, { foreignKey: 'questaoId' });
  }

  return Questao
}



