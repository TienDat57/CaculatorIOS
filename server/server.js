import express from 'express';
import * as React from 'react';
import ReactDOM from 'react-dom/server';
import { StaticRouter } from 'react-router-dom/server';
require('dotenv').config();

import App from '../src/index';

const app = express();
const port = process.env.PORT || 3000;
const host = process.env.HOST || 'localhost';

app.use(express.static('build'));

app.get('*', (req, res) => {
   const app = ReactDOM.renderToString(
      <StaticRouter location={req.url}>
         <App />
      </StaticRouter>,
   );
   res.send(`
  <!DOCTYPE html>
  <html>
    <head>
      <title>UDT Testing</title>
    </head>
    <body>
      <div id="root">${app}</div>
    </body>
  </html>
`);
});

app.listen(port, () => {
   console.log(`Server is listening on http://${host}:${port}`);
});
