'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Post extends Model {
    static associate(models) {
      Post.belongsTo(models.Usuario, { foreignKey: 'usuarioId' });
    }
  }
  Post.init({
    titulo: DataTypes.STRING,
    conteudo: DataTypes.TEXT,
    usuarioId: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Usuario',
        key: 'id'
      }
    }
  }, { sequelize, modelName: 'Post' });

  return Post;
};
