import React, { Component } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from 'reactstrap';

const Link = ({ to, children }) => (
  <NavItem>
    <NavLink tag={RouterLink} to={to}>
      {children}
    </NavLink>
  </NavItem>
);

export default class Navigation extends Component {
  state = { isCollapsed: true };

  toggleMenu = () => {
    const { isCollapsed } = this.state;
    this.setState({ isCollapsed: !isCollapsed });
  };

  render() {
    const { isCollapsed } = this.state;

    return (
      <div>
        <Navbar color="inverse" inverse expand="md" fixed="top" toggleable>
          <NavbarBrand href="/">Calvary Baptist Church</NavbarBrand>
          <NavbarToggler onClick={this.toggleMenu} />
          <Collapse isOpen={!isCollapsed} navbar>
            <Nav className="ml-auto" navbar>
              <Link to="/home">Home</Link>
              <Link to="/about">About</Link>
              <Link to="/contact">Contact</Link>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}
