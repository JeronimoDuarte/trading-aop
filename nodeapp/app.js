const express = require('express');
const app = express();
const cors = require('cors');
const StockController = require('./stockController');

app.use(cors());

app.get('/stock/:symbol', StockController.getStockData);

module.exports = app;
