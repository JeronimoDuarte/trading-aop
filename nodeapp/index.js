const express = require('express');
const rp = require('request-promise');
const app = express();
const PORT = process.env.PORT || 3100;
const cors = require('cors');
app.use(cors());

app.get('/stock/:symbol', async (req, res) => {
  try {
    console.log('teste req.params.symbol ==> ', req.params.symbol)
    const options = {

      uri: `https://query2.finance.yahoo.com/v8/finance/chart/${req.params.symbol}?interval=1d&range=2mo`,
    };
    const data = await rp(options);
    const dataJson = await JSON.parse(data)
    res.json(dataJson);
  } catch (error) {
    console.log('teste error ', error)
    res.status(500).send('Error retrieving stock data');
  }
});

app.get('/companies', async (req, res) => {
 const companies = {
  data: [
    {symbol: "AMD", name: "Advanced Micro Devices, Inc."},
    {symbol: "INTC", name: "Intel Corporation"},
    {symbol: "FRC", name: "First Republic Bank"},
    {symbol: "ADBE", name: "Adobe Inc."},
    {simbol: "PATH", name: "UiPath Inc."},
    {symbol: "AMZN", name: "Amazon.com, Inc."},
    {symbol: "GOOG", name: "Alphabet Inc."},
    {symbol: "SNAP", name: "Snap Inc."},
    {symbol: "SNAP", name: "Snap Inc."},
    {symbol:  "GOOGL", name: "Alphabet Inc" },
    {symbol: "NVDA", name: "NVIDIA Corporation"},
    {symbol: "FRC-PH", name: "First Republic Bank"},
    {symbol: "PTRA", name: "Proterra Inc."},
    {symbol: "HNST", name: "The Honest Company, Inc."},
    {symbol: "ESPR", name: "Esperion Therapeutics, Inc."},
    {symbol: "NFLX", name: "Netflix, Inc."},
    {symbol: "LPSN", name: "LivePerson, Inc."},
    {symbol: "MPW", name: "Medical Properties Trust, Inc"},
    {symbol: "LIPO", name: "Lipella Pharmaceuticals Inc."},
    {symbol: "VORB", name: "Virgin Orbit Holdings, Inc."},
    {symbol: "BXRX", name: "Baudax Bio, Inc."},
    {symbol: "FRC-PK", name: "First Republic Bank"},
    {symbol: "PD", name: "PagerDuty, Inc."},
    {symbol: "PCT", name: "PureCycle Technologies, Inc."},
    {symbol: "TLRY.TO", name: "Tilray Brands, Inc."},
    {symbol: "TQQQ", name: "ProShares UltraPro QQQ"},
    {symbol: "ASO", name: "Academy Sports and Outdoors, Inc."},
    {symbol: "TRKA", name: "Troika Media Group, Inc."},
    {symbol: "QCOM", name: "QUALCOMM Incorporated"},
    {symbol: "SPCE", name: "Virgin Galactic Holdings, Inc."},
    {symbol: "META", name: "Meta Platforms, Inc."}
  ]
 }
 res.json(companies)
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
