import React, { Component } from 'react';

import PageHero from '../components/page-hero-component';

export default class Page extends Component {
  render() {
    return (
      <div style={{ height: '20000px' }}>
        <PageHero
          title="Calvary Baptist Church"
          subtitle="Saint Peter, Minnesota"
        />
      </div>
    );
  }
}
