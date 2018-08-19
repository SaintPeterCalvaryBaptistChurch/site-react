import React, { Component } from 'react';
import { Router, Switch, Route, Redirect } from 'react-router-dom';

import history from './history';

import Navigation from './components/nav-component';

import Home from './pages/home-page';
import About from './pages/about-page';
import Contact from './pages/contact-page';

export default class Routes extends Component {
  render() {
    return (
      <Router history={history}>
        <div>
          <Navigation />
          <Switch>
            <Redirect exact from="/" to="/home" />
            <Route exact path="/home" component={Home} />
            <Route exact path="/about" component={About} />
            <Route exact path="/contact" component={Contact} />
          </Switch>
        </div>
      </Router>
    );
  }
}
