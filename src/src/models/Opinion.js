const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Opinion extends Model {}

Opinion.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    content: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    author_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'author',
        key: 'id',
      },
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'opinion',
  }
);

module.exports = Opinion;