import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import { Home } from './Home';

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/" name="Home" component={Home} />
        </Switch>
      </Router>
    );
  }
}

export default App;
