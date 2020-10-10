import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import './App.css';
import Login from './pages/Login';
import Signup from './pages/Signup';
import PollList from './pages/PollList';
import Guest from './pages/Guest';
import AddPoll from './components/AddPoll';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact >{localStorage.getItem("token") ? <PollList /> : <Redirect to="/login" />}</Route>
        <Route path="/addpoll" exact component={AddPoll} />
        <Route path="/login" exact component={Login} />
        <Route path="/signup" exact component={Signup} />
        <Route path="/guest" exact component={Guest} />
        <Route path="/polllist" exact component={PollList} />
      </Switch>
    </Router>
  )
}
export default App;
