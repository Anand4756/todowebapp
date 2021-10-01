import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


import Nav from "./components/Nav";

import Register from "./components/Register";
import Todo from "./pages/Todo";

function App() {

  
  return (
    

    <div>
         
      <Router>
     
      <Switch>
      <Route path="/" exact component={Todo}></Route>     
      <Route path="/register" component={Register}></Route> 
      </Switch>
    </Router>
    </div>
  );
}

export default App;
