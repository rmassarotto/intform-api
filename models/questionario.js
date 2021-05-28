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
        allowNull: false,
        references: {
          model: 'categoria',
          key: 'id'
        }
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

  return Questionario
}



