import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import 'bootstrap/dist/css/bootstrap.min.css';

import registerServiceWorker from './register-service-worker';
import Routes from './routes';

class App extends Component {
  render() {
    return (
      <div>
        <Routes />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
