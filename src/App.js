import React from 'react';
import './App.css';
import Nav from './components/Nav.js';
import Home from './pages/Home.js';
import About from './pages/About.js';
import Shop from './pages/Shop.js';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/about' component={About} />
          <Route path='/shop' component={Shop} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;