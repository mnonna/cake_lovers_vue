/* eslint-disable */

var express = require('express');
var path = require('path');
var serveStatic = require('serve-static');
var cors = require("cors");

app = express();

app.use(express.json());
app.use(cors());
app.use(serveStatic(__dirname + "/dist"));

var port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`App listening on port ${port}`);
});