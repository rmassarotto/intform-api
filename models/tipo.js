module.exports = function (sequelize, DataTypes) {
  const Tipo = sequelize.define('tipo',
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
      tableName: 'tipo',
      timestamps: true
    }
  );

  Tipo.associate = function (models) {
    this.hasMany(models.Alternativa, {
      foreignKey: 'tipoId'
    })
  }

  return Tipo
}



