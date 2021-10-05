//jshint esversion:6

const express = require("express");
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();
app.use(cors());
app.use(express.json());

app.post('/register',(req, res)=>{

  const name = req.body;
  res.json(name);
  console.log(name);
})



app.listen(5000, function() {
  console.log("Server started on port 5000");
});
