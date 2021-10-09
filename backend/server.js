//jshint esversion:6

const express = require("express");
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect("mongodb://localhost:27017/todoDB",{useNewUrlParser: true , useUnifiedTopology: true });


const userSchema = new mongoose.Schema({
  name: String,
  email: {
    type: String,
    unique: true
  },
  password: String,

});
const User = mongoose.model('User', userSchema);
app.post('/register', (req, res)=>{
  const { name, email, password } = req.body;

  const users = new User({
      name,
      email,
      password
  })
 users.save(function(err){
   if(err){
     console.log(err);
   }else{
     console.log("success");
   }
 });

  res.json(name);
  console.log(name);
})



app.listen(5000, function() {
  console.log("Server started on port 5000");
});
