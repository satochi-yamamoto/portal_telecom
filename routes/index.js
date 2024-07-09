const express = require('express');
const router = express.Router();
const authRoutes = require('./authRoutes');
const userRoutes = require('./userRoutes');
const errorController = require('../controllers/errorController');

router.use('/auth', authRoutes);
router.use('/users', userRoutes);

// Página inicial
router.get('/', (req, res) => {
  res.render('index');
});

// Página principal (Home)
router.get('/home', ensureAuthenticated, (req, res) => {
  res.render('home', { user: req.session.user });
});

// Manipulação de erros 404
router.use(errorController.notFound);

module.exports = router;
