import path from "path";
import fs from "fs";

import React from "react";
import ReactDOMServer from "react-dom/server";
import express from "express";
require('dotenv').config()

import App from "../src/index";

const PORT = process.env.PORT || 3000;
const app = express();

app.get(["/", "/history"], (req, res) => {
   const app = ReactDOMServer.renderToString(<App />);
   const indexFile = path.resolve("./build/index.html");
   fs.readFile(indexFile, "utf8", (err, data) => {
      if (err) {
         console.error("Something went wrong:", err);
         return res.status(500).send("Oops, better luck next time!");
      }
      return res.send(
         data.replace('<div id="root"></div>', `<div id="root">${app}</div>`)
      );
   });
});

app.use(
   express.static(path.resolve(__dirname, ".", "build"))
);

app.listen(PORT, () => {
   console.log(`Server is listening http://localhost:${PORT}`);
});
