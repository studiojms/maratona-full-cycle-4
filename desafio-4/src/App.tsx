import React from 'react';
import { Switch, Route } from 'react-router';
import { Link, BrowserRouter as Router } from 'react-router-dom';

import Home from './components/Home';
import Users from './components/Users';

function App() {
  return (
    <Router>
      <section className="section">
        <div className="container">
          <nav className="navbar is-fixed-top">
            <div className="navbar-start">
              <Link to="/" className="navbar-item">
                Home
              </Link>

              <Link to="/users" className="navbar-item">
                Users
              </Link>
            </div>
          </nav>
          <Switch>
            <Route path="/" component={Home} exact />
            <Route path="/users" component={Users} exact />
          </Switch>
        </div>
      </section>
    </Router>
  );
}

export default App;
