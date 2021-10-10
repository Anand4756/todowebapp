import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Login from "./components/Login";

import Register from "./components/Register";
import Todo from "./pages/Todo";

export const CredentialContext = React.createContext(null);
function App() {

  const credentialsState = useState(null);

  return (
    

    <div>
         <CredentialContext.Provider value={credentialsState}>
      <Router>
     
      <Switch>
      <Route path="/" exact component={Todo}></Route>     
      <Route path="/register" component={Register}></Route>  
      <Route path="/login" component={Login}></Route>
      </Switch>
    </Router>
    </CredentialContext.Provider>
    </div>
  );
}

export default App;
