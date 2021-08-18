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
          <Route path="/Images/:id&:name">
            <ImageSlider/>
          </Route>
          <Route path="/Rating/:id&:name">
            <StarRatings/>
          </Route>
          <Route component={() => (<div>404 Not found </div>)} />
        </Switch>
    </Router>
  );
}

export default App;
