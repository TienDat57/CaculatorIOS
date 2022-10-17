import express from 'express';
import renderer from './helpers/renderer';
require('dotenv').config();

const app = express();

const port = process.env.PORT || 3001;
const host = process.env.HOST || 'localhost';

app.use(express.static('dist'));

app.get('*', (req, res) => {
  const content = renderer(req);

  res.send(content);
});

app.listen(port, () => {
  console.log(`Listening http://${host}:${port}`);
});
