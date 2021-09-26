import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


import Nav from "./components/Nav";
import Input from "./components/Input";
import Card from "./components/Card";
import Register from "./components/Register";

function App() {

  const [todos, settodos] = useState([])

  function addtodo(newNote) {
    
    settodos(prevtodos => {
      return [...prevtodos, newNote];

    })
  }
  return (
    

    <div>
      <Router>
      <Switch>
      <Route path="/" exact component={Card}></Route>     
      <Route path="/register" component={Register}></Route>  
      </Switch>

    </Router>
   <Nav />
   <Input onAdd={addtodo}/>
   {todos.map(todoitems=>{
     return <Card title={todoitems.title} content={todoitems.content} />
   })}

    </div>
  );
}

export default App;
