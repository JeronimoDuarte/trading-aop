const { curly } = require('node-libcurl');

const getStockData = async (req, res) => {
  try {
    const url = `https://query2.finance.yahoo.com/v8/finance/chart/${req.params.symbol}`;
    console.log('url request => ', url);

    const data = await curly.get(url);
    res.json(data);
  } catch (error) {
    res.status(500).send('Error retrieving stock data');
  }
};

module.exports = { getStockData };
