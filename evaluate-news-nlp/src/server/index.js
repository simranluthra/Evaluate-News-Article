var path = require('path')
const express = require('express')
const cors = require("cors");
const Aylien = require("aylien_textapi");
const bodyParser = require("body-parser");
const dotenv = require('dotenv').config()

const app = express()

app.use(cors());
app.use(bodyParser.json());
app.use(express.static('dist'))
app.use(bodyParser.urlencoded({ extended: true }));

const textApi = new Aylien({    //Add your own API key and id
    application_id: process.env.API_ID,
    application_key: process.env.API_KEY
  });   

app.get('/', function (req, res) {
    res.sendFile('/views/index.html', { root: __dirname })
})

app.post("/checkStatement", (req, res) => {
    const { text } = req.body;
    console.log("request statement", text);
    textApi.sentiment({ text }, (error, result, remaining) => {
      console.log("api response from Alyien ", result, remaining, error);
      res.send(result);
    });
});

// designates what port the app will listen to for incoming requests
app.listen(8000, function () {
    console.log('Server app listening on port 8000!')
})

module.exports = app;
