const express = require('express');
const router = express.Router();
const User = require('./../../../data/users');
const allUsers = new User();
const users = allUsers.getUsers();

// route: /api/users will get all JSON users from ./data/users.json file.
router.get('/', (req, res) => res.json(users));
// Route with /api/users/"id" will get that single user via the express params.
router.get('/:id', (req, res) => {
  const exists = users.some((user) => user._id === req.params.id);
  if (exists) {
    res.json(users.filter((user) => user._id === req.params.id));
  } else {
    res.status(400).json({ msg: `No member with the id of ${req.params.id}` });
  }
});

module.exports = router;
