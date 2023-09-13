const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.render('homepage');
});

router.get('/dashboard', (req, res) => {
  if (!req.session.logged_in) {
    res.redirect('/login');
    return;
  }
  res.render('dashboard', { logged_in: req.session.logged_in });
});

router.get('/login', (req, res) => {
  if (req.session.logged_in) {
    res.redirect('/dashboard');
    return;
  }
  res.render('login');
});

router.post('/login', (req, res) => {
  // Add code here to authenticate user and set session.logged_in to true
});

router.get('/signup', (req, res) => {
  res.render('signup');
});

router.post('/signup', (req, res) => {
  // Add code here to save user credentials to database
});

router.get('/logout', (req, res) => {
  req.session.destroy(() => {
    res.redirect('/');
  });
});

module.exports = router;