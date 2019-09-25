const express = require('express');
const consign = require('consign');
const cors = require('cors'); 

const app = express();

app.use(cors());

consign()
    .include('/src/libs/middlewares.js')
    .then('/src/routes')
    .include('/src/libs/boots.js')
    .into(app);