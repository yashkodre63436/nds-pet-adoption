const express = require('express');

const app = express();
const port = 5000;

app.get("/pets", (req, res) => {

    console.log("Success!!! getting");
  });

  app.post("/pets", (req, res) => {
    console.log("Success!!! posting");
  });

