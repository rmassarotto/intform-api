module.exports = function (sequelize, DataTypes) {
  const Alternativa = sequelize.define('alternativa',
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
      },
      tipoId: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      texto: {
        type: DataTypes.STRING,
        allowNull: false
      }
    },
    {
      tableName: 'alternativa',
      timestamps: true
    }
  );

  Alternativa.associate = function (models) {
    this.belongsTo(models.Tipo, { sourceKey: 'id', foreignKey: 'tipoId' });
    this.hasMany(models.AlternativaQuestao, { foreignKey: 'alternativaId' });
  }

  return Alternativa
}



