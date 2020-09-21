import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Home from './Home/Home';
import Comment from './components/Comment/Comment';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import NoMatch from './components/NoMatch/NoMatch';


function App() {
  return (
    <div className="background">
      <Navbar></Navbar>
      <Router>
        <Switch>
          <Route exact path="/home">
          <Home></Home>
          </Route>
          <Route exact path="/home/post">
          <Home></Home>
          </Route>
          <Route exact path="/home/post/comment">
          <Comment></Comment>
          </Route>
          <Route path="/posts/:id">
          <Comment></Comment>
          </Route>
          <Route exact path="/">
            <Home/>
          </Route>
          
          <Route path="*">
            <NoMatch></NoMatch>
          </Route>
        </Switch>
      </Router>


    </div>
  );
}

export default App;
