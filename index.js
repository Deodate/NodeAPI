const express = require('express');
const app = express();
const Pool = require('pg').Pool;
const Path = require('path');
const ejs = require('ejs');
const PORT = 3000;
require('dotenv').config();

app.listen(PORT, ()=>{console.log('Server strat at port ${PORT}')})