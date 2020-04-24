import React from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

import Login from "./components/Login";
import PrivateRoute from './components/PrivateRoute';
import BubblePage from './components/BubblePage';
import "./styles.scss";

function App() {
  return (
    <Router>
      <div className="App">
            <Link to="/login">Login</Link>
        <Switch>
        <Route exact path="/login" component={Login} />
        <PrivateRoute path="/protected" component={BubblePage} />
        </Switch>
        {/* 
          Build a PrivateRoute component that will 
          display BubblePage when you're authenticated 
        */
        }
      </div>
    </Router>
  );
}

export default App;
