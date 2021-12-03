const { Model, DataTypes } = require('sequelize');

class User extends Model {
  static init(sequelize) {
    super.init(
      {
        uuid: DataTypes.STRING,
        name: DataTypes.STRING,
        email: DataTypes.STRING,
        password: DataTypes.STRING,
        cpf: DataTypes.STRING,
        username: DataTypes.STRING,
        // cidade: DataTypes.STRING,
        // estado: DataTypes.STRING,
        // pais: DataTypes.STRING,
        isactive: DataTypes.BOOLEAN,
      },
      { sequelize }
    );
  }
}

module.exports = User;
