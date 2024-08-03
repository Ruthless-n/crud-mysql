const bcrypt = require('bcryptjs');
const { Usuario } = require('../models');

exports.showLoginPage = (req, res) => {
  res.render('login');
};

exports.login = async (req, res) => {
  const { email, senha } = req.body;
  const user = await Usuario.findOne({ where: { email } });
  if (user && await bcrypt.compare(senha, user.senha)) {
    req.session.userId = user.id;
    res.redirect('/posts');
  } else {
    res.redirect('/users/login');
  }
};

exports.showRegisterPage = (req, res) => {
  res.render('register');
};

exports.register = async (req, res) => {
  const { nome, email, senha } = req.body;
  const hashedPassword = await bcrypt.hash(senha, 10);
  await Usuario.create({ nome, email, senha: hashedPassword });
  res.redirect('/users/login');
};