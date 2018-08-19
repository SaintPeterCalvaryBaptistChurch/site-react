import React, { Component } from 'react';
import image from '../assets/bg-about.jpg';

import Page from './page';

export default class About extends Component {
  render() {
    return (
      <Page headerSubtitle="Saint Peter, Minnesota" headerBackground={image}>
        <h2>About</h2>
      </Page>
    );
  }
}
