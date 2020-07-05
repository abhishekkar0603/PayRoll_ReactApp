import React from "react";
import "./static/App.css";
import LandingPage from "./components/landing";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/home";
import PrivateRoute from "./components/PrivateRoute";
import Login from "./components/login";
import AddEmp from "./components/addemp";
import Net from "./components/net";

function App() {
  return (
    <div>
      <Router>
        <div>
          <Switch>
            <Route path="/" exact>
              <LandingPage />
            </Route>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/addemp">
              <AddEmp />
            </Route>
            <Route path="/net" render={props => <Net {...props} />} />
            <PrivateRoute path="/home">
              <Home />
            </PrivateRoute>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
