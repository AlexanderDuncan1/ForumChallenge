const db = require('../models');

exports.getArticles = async (req, res) => {
  const articles = await db.Article.findAll();
  res.render('blogView', { articles });
};

exports.getArticle = async (req, res) => {
  const article = await db.Article.findByPk(req.params.id);
  res.render('articleView', { article });
};

exports.createArticle = async (req, res) => {
  const newArticle = await db.Article.create(req.body);
  res.redirect(`/articles/${newArticle.id}`);
};

exports.updateArticle = async (req, res) => {
  await db.Article.update(req.body, { where: { id: req.params.id } });
  res.redirect(`/articles/${req.params.id}`);
};

exports.deleteArticle = async (req, res) => {
  await db.Article.destroy({ where: { id: req.params.id } });
  res.redirect('/articles');
};