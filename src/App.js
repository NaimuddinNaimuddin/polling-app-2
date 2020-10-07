import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';
import Login from './pages/Login';
import Signup from './pages/Signup';
import PollList from './pages/PollList';

function App() {
  return (
    <Router>
      <Route path="/" exact>  <Signup /> </Route>
      <Route path="/login" exact>  <Login /> </Route>
      <Route path="/signup" exact>  <Signup /> </Route>
      <Route path="/polllist" exact>  <PollList /> </Route>
    </Router>
  );
}
export default App;
