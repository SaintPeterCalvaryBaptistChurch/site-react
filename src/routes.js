import React, { Component } from 'react';
import { Router, Switch, Route, Redirect } from 'react-router-dom';

import history from './history';

import Navigation from './components/nav-component';

import Page from './pages/page';

export default class Routes extends Component {
  render() {
    return (
      <Router history={history}>
        <div>
          <Navigation />
          <Switch>
            <Redirect exact from="/" to="/home" />
            <Route exact path="/home" component={Page} />
            <Route exact path="/about" component={Page} />
            <Route exact path="/contact" component={Page} />
          </Switch>
        </div>
      </Router>
    );
  }
}
