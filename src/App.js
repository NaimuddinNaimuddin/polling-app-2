import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import './App.css';
import Login from './pages/Login';
import Signup from './pages/Signup';
import PollList from './pages/PollList';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/"> {
          localStorage.getItem("token") ? <PollList /> : <Redirect to="/login" />
        } </Route>
        <Route path="/login" exact component={Login} />
        <Route path="/signup" exact component={Signup} />
        <Route path="/polllist" exact component={PollList} />
      </Switch>
    </Router>
  )
}
export default App;
