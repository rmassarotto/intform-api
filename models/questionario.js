module.exports = function (sequelize, DataTypes) {
  const Questionario = sequelize.define('questionario',
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
      }
    },
    {
      tableName: 'int_questionario',
      timestamps: true
    }
  );

  Questionario.associate = function (models) {
    this.belongsTo(models.Categoria, { as: 'categoria', sourceKey: 'id', foreignKey: 'categoriaId' });
    this.hasMany(models.Questao, { as: 'questao', foreignKey: 'questionarioId' });
  }

  return Questionario
}



