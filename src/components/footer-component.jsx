import React, { Component } from 'react';
import { Row } from 'reactstrap';
import Iframe from 'react-iframe';

export default class Footer extends Component {
  shouldComponentUpdate() {
    return false;
  }

  render() {
    return (
      <Row className="ui-footer">
        <Iframe
          id="footer-map"
          width="100%"
          height="140px"
          position="relative"
          url="https://maps.google.com/maps?f=q&amp;source=s_q&amp;hl=en&amp;geocode=&amp;q=Calvary,+Baptist.,+Saint+Peter,+MN&amp;aq=0&amp&amp;z=15&amp;iwloc=A&amp;output=embed"
        />
        <p className="ui-copyright">
          Copyright &copy; Calvary Baptist Church 2018
        </p>
      </Row>
    );
  }
}
