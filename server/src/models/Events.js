const { Model, DataTypes } = require('sequelize');

class Events extends Model {
  static init(sequelize) {
    super.init(
      {
        nome: DataTypes.STRING,
        local: DataTypes.STRING,
        cidade: DataTypes.STRING,
        estado: DataTypes.STRING,
        pais: DataTypes.STRING,
        situacao: DataTypes.INTEGER,
        modalidade: DataTypes.INTEGER,
        organizador: DataTypes.INTEGER,
        descricao: DataTypes.STRING,
        data: DataTypes.STRING,
        imagem: DataTypes.STRING,
        uuid: DataTypes.STRING,
        valor: DataTypes.FLOAT,
        jogadores: DataTypes.INTEGER,
        espectadores: DataTypes.INTEGER,
      },
      { sequelize }
    );
  }
}

module.exports = Events;
