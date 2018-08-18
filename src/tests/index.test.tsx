import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from '..';

it('renders the main app without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});
