module.exports = function (sequelize, DataTypes) {
  const Questionario = sequelize.define('usuario',
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
      },
      categoriaId: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      nome: {
        type: DataTypes.STRING,
        allowNull: false
      },
      url: {
        type: DataTypes.STRING,
        allowNull: false
      },
    },
    {
      tableName: 'questionario',
      timestamps: true
    }
  );

  Questionario.associate = function (models) {
    this.belongsTo(models.Categoria, { sourceKey: 'id', foreignKey: 'categoriaId' });
    this.hasMany(models.QuestionarioQuestao, { foreignKey: 'questionarioId' });
  }

  return Questionario
}



