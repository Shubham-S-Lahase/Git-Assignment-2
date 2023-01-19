const express = require("express");
const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/Assignment");
const port = 3000;
const bodyparser = require("body-parser");

const app = express();
app.use(bodyparser.json());

app.listen(port, () => console.log(`Server Running on ${port}`));