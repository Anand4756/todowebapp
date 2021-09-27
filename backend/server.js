//jshint esversion:6

const express = require("express");
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();
app.use(cors());

app.get('/register',(req, res)=>{
res.json('register route');
})

app.post('/register',(req, res)=> {

  
})


app.listen(5000, function() {
  console.log("Server started on port 5000");
});
