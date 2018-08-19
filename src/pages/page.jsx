import React, { Component } from 'react';
import { Jumbotron, Container, Row } from 'reactstrap';

import Footer from '../components/footer-component';

class Page extends Component {
  render() {
    const {
      headerTitle,
      headerSubtitle,
      headerBackground,
      children
    } = this.props;

    const backgroundImage = headerBackground ? `url(${headerBackground})` : '';

    return (
      <div className="ui-page">
        <Jumbotron className="ui-page-hero" style={{ backgroundImage }}>
          <div>
            <h2 className="display-4">{headerTitle}</h2>
            <hr className="small" />
            <p className="lead">{headerSubtitle}</p>
          </div>
        </Jumbotron>

        <Container>
          <Row>{children}</Row>
        </Container>

        <Footer />
      </div>
    );
  }
}

Page.defaultProps = {
  headerTitle: 'Calvary Baptist Church'
};

export default Page;
