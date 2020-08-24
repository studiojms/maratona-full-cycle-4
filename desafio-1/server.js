'use strict';

const express = require('express');

const PORT = 8080;

const app = express();

app.get('/', (req, res) => {
  res.send('Eu sou Full Cycle');
});

app.listen(PORT);
