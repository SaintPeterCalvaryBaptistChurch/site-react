import React, { Component } from 'react';
import image from '../assets/bg-contact.jpg';

import Page from './page';

export default class Contact extends Component {
  render() {
    return (
      <Page headerSubtitle="Saint Peter, Minnesota" headerBackground={image}>
        <h2>Contact</h2>
      </Page>
    );
  }
}
