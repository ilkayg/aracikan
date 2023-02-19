/*jshint esversion: 6 */

const express = require('express');
const path = require('path');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.static("public"));

app.get("/", function(req, res) {
  console.log("Request from " + req.ip);
  const filePath = path.join(__dirname, 'public', req.url === '/' ? 'index.html' : req.url);
  res.end(filePath);
});

const PORT = process.env.PORT || 1311
app.listen(PORT, function() {
  console.log("Web server started on port: ", PORT);
});