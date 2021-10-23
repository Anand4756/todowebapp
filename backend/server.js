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

const todoSchema = new mongoose.Schema({
  title: String,
  content: String
});
const Todo = mongoose.model('Todo', todoSchema);

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

app.post('/login',(req, res) => {
  const {email, password} = req.body;

 User.findOne({email: email}, function(err, found){
  if(err){
      console.log(err);
  }else{
  if(found){
      if(found.password==password && found.email==email){
          res.json("login successful");
      }else{
          res.json('error');
          console.log(found.password);
      }
  }else{
      res.json("no account");
  }
  }
  
  
  });

})
app.post("/todo", (req, res) => {
  const {title, content} = req.body;
const todo = new Todo({
  title,
  content
})
todo.save(function(err){
  if(err)
  res.json(err)
  console.log("successfully saved");
})

})


app.listen(5000, function() {
  console.log("Server started on port 5000");
});
