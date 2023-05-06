require('dotenv').config();
const express = require('express');
const fs = require('fs');
const http = require('http');
const path = require('path');
const app = express();
const url = process.env.URL || localhost;
const port = process.env.PORT || 3001;
const logger = require('logger').createLogger();
// Gets All JSON users:
const User = require('../../data/users');
const { log } = require('console');
const allUsers = new User();
const users = allUsers.getUsers();

// Gets all JSON users from ./data/users.json
app.get('/api/users', (req, res) => {
  res.json(users);
});

app.get('/api/users/:id', (req, res) => {
  res.json(users.filter((user) => user._id === req.params.id));
});

// Sets the public folder as place for any routes as static HTML files.
app.use(express.static(path.join(__dirname, 'public')));

app.listen(port, url, () => {
  console.log(`Yay!, Your server is running on http://${url}:${port}`);
});
