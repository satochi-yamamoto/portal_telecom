const User = require('../models/userModel');

exports.getUser = (req, res) => {
  const { username } = req.params;

  User.findByUsername(username, (err, user) => {
    if (err) {
      return res.status(500).send('Internal Server Error');
    }
    if (!user) {
      return res.status(404).send('User not found');
    }
    res.json(user);
  });
};
