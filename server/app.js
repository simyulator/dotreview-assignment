const express = require('express');
const fs = require('fs');

const app = express();
const port = 9000;

const cors = require('cors');

app.use(cors());

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/api/v1/search', (req, res) => {
  const query = req.query.query;

  const rawData = JSON.parse(fs.readFileSync('data.json')).data;
  if (query === '') {
    res.send(rawData);
  } else {
    // console.log(rawData);
    const newData = rawData.filter((data) => {
      // console.log('data = ' + data.name);
      return data.name.toLowerCase().includes(query.toLowerCase());
    });
    // console.log(newData);
    res.send(newData);
  }
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
