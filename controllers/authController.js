const User = require('../models/userModel');
const { validateLoginInput } = require('../utils/validation');
const { comparePassword } = require('../utils/encryption');

exports.login = async (req, res) => {
  const { username, password } = req.body;

  if (!validateLoginInput(username, password)) {
    return res.status(400).send('Invalid input');
  }

  User.findByUsername(username, async (err, user) => {
    if (err) {
      return res.status(500).send('Internal Server Error');
    }
    if (!user || !(await comparePassword(password, user.password))) {
      return res.status(401).send('Invalid username or password');
    }

    req.session.user = user;
    res.redirect('/home');
  });
};

exports.logout = (req, res) => {
  req.session.destroy();
  res.redirect('/');
};
