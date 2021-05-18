module.exports = function (sequelize, DataTypes) {
  const Categoria = sequelize.define('categoria',
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
      },
      nome: {
        type: DataTypes.STRING,
        allowNull: false
      }
    },
    {
      tableName: 'int_categoria',
      timestamps: true
    }
  );

  Categoria.associate = function (models) {
    this.hasMany(models.Questionario, {
      foreignKey: 'categoriaId'
    })
  }

  return Categoria
}



