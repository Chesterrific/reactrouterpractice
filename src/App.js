import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Nav from './components/Nav.js';
import Home from './pages/Home.js';
import About from './pages/About.js';
import Shop from './pages/Shop.js';
import ItemDetail from './pages/ItemDetail.js';


function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/about' exact component={About} />
          <Route path='/shop' exact component={Shop} />
          <Route path='/shop/:id' component={ItemDetail} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;