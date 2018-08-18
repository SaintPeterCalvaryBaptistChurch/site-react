import * as React from 'react';
import * as ReactDOM from 'react-dom';
import registerServiceWorker from './service-worker';
import logo from './svg/logo.svg';

import './stylesheets/index.css';

export default class App extends React.Component {
  public render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.tsx</code> and save to reload.
        </p>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root') as HTMLElement);

registerServiceWorker();
