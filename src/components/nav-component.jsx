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
import classnames from 'classnames';

const SCROLL_THRESHOLD = 50;

const Link = ({ to, children }) => (
  <NavItem>
    <NavLink className="link" tag={RouterLink} to={to}>
      {children}
    </NavLink>
  </NavItem>
);

export default class Navigation extends Component {
  state = { isScrolled: false, isCollapsed: true };

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll = event => {
    const isScrolled = event.pageY > SCROLL_THRESHOLD;

    if (isScrolled !== this.state.isScrolled) {
      this.setState({ isScrolled });
    }
  };

  toggleMenu = () => {
    const { isCollapsed } = this.state;
    this.setState({ isCollapsed: !isCollapsed });
  };

  render() {
    const { isCollapsed, isScrolled } = this.state;

    return (
      <div>
        <Navbar
          className={classnames('ui-navbar', {
            ' -scrolled': isScrolled,
            ' -unscrolled': !isScrolled
          })}
          dark={!isScrolled}
          light={isScrolled}
          expand="md"
          fixed="top"
        >
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
