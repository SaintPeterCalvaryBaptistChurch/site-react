import React, { Component } from 'react';
import { Router, Switch, Route, Redirect } from 'react-router-dom';

import history from './history';
import Navigation from './components/nav-component';

const placeholder = () => <div />;

export default class Routes extends Component {
  render() {
    return (
      <Router history={history}>
        <div>
          <Navigation />
          <Switch>
            <Redirect exact from="/" to="/home" />
            <Route exact path="/home" component={placeholder} />
            <Route exact path="/about" component={placeholder} />
            <Route exact path="/contact" component={placeholder} />
          </Switch>
        </div>
      </Router>
    );
  }
}
