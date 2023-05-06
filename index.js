require('dotenv').config();
const express = require('express');
const fs = require('fs');
const http = require('http');
const path = require('path');
const app = express();
const url = process.env.URL;
const port = process.env.PORT || 3001;

// Sets the public folder as place for any routes as static HTML files.
app.use(express.static(path.join(__dirname, 'public')));

app.listen(port, url, () => {
  console.log(`Yay!, Your server is running on http://${url}:${port}`);
});
