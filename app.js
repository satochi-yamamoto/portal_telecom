const express = require('express');
const bodyParser = require('body-parser');
const session = require('express-session');
const path = require('path');
const { ensureAuthenticated } = require('./middleware/authMiddleware');
const { handleErrors } = require('./middleware/errorMiddleware');

const app = express();

// Configuração do EJS
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// Middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(session({ secret: 'secret-key', resave: false, saveUninitialized: true }));

// Rotas
const routes = require('./routes/index');
app.use('/', routes);

// Middleware de erro
app.use(handleErrors);

// Inicia o servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
