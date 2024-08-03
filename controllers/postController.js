const { Post, Usuario } = require('../models');

exports.index = async (req, res) => {
  const posts = await Post.findAll({ include: Usuario });
  res.render('index', { posts });
};

exports.showCreatePage = (req, res) => {
  res.render('create');
};

exports.create = async (req, res) => {
  const { titulo, conteudo } = req.body;
  await Post.create({ titulo, conteudo, usuarioId: req.session.userId });
  res.redirect('/posts');
};

exports.showEditPage = async (req, res) => {
  const post = await Post.findByPk(req.params.id);
  res.render('edit', { post });
};

exports.edit = async (req, res) => {
  const { titulo, conteudo } = req.body;
  await Post.update({ titulo, conteudo }, { where: { id: req.params.id } });
  res.redirect('/posts');
};

exports.delete = async (req, res) => {
  await Post.destroy({ where: { id: req.params.id } });
  res.redirect('/posts');
};