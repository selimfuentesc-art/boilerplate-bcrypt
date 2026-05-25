'use strict';

require('dotenv').config();

const express = require('express');
const bcrypt = require('bcrypt');

const app = express();

app.get('/', function(req, res) {
  res.send('BCrypt Project');
});

const listener = app.listen(process.env.PORT || 3000, function() {
  console.log('Your app is listening on port ' + listener.address().port);
});