const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Article extends Model {}

Article.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true, // Unique titles for all articles
      validate: {
        len: [5, 255], // Title should be between 5 and 255 characters
      },
    },
    slug: { // For SEO-friendly URLs
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    content: {
      type: DataTypes.TEXT,
      allowNull: false,
      validate: {
        len: [10], // At least 10 characters long
      },
    },
    author: {
      type: DataTypes.INTEGER,
      references: {
        model: 'user',
        key: 'id',
      },
    },
    datePosted: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW,
    },
  },
  {
    hooks: {
      beforeCreate: async (articleData) => {
        // Convert article title to a slug and save
        articleData.slug = articleData.title.toLowerCase().replace(/[^a-z0-9]+/g, '-');
        return articleData;
      },
    },
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'article',
  }
);

module.exports = Article;
