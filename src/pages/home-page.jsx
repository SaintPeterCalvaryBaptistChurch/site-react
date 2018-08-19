import React, { Component } from 'react';
import { Col } from 'reactstrap';

import image from '../assets/bg-home.jpg';
import Page from './page';

import PostArchive from '../components/post-archive-component';

export default class Home extends Component {
  render() {
    return (
      <Page headerSubtitle="Saint Peter, Minnesota" headerBackground={image}>
        <Col md="8">
          <hr />
        </Col>
        <Col md="4">
          <PostArchive />
        </Col>
      </Page>
    );
  }
}
