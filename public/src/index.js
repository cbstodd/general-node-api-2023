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
const allUsers = new User();
const users = allUsers.getUsers();

// Sets the public folder as place for any routes as static HTML files.
app.use(express.static(path.join(__dirname, 'public/views')));
// Pulls  in 'user' routes from /routes directory.
app.use('/api/users', require('./routes/user'));

app.listen(port, url, () => {
  console.log(`Yay!, Your server is running on http://${url}:${port}`);
});
