import './App.css';
import React from 'react';
import ImageSlider from './components/ImageSlider';
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";
import Login from './components/Login';
import StarRatings  from './components/StarRatings';


function App() {
  return (
    <Router>
        <Switch>
          <Route exact path="/">
            <Login/>
          </Route>
          <Route path="/Images">
            <ImageSlider/>
          </Route>
          <Route path="/Rating">
            <StarRatings/>
          </Route>
        </Switch>
    </Router>
  );
}

export default App;
