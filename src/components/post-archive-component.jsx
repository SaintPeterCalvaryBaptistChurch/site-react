import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class PostArchive extends Component {
  render() {
    return (
      <div>
        <h4>Archives</h4>
        <ol className="list-unstyled mb-0">
          <li>
            <Link to="/">July 2018</Link>
          </li>
          <li>
            <Link to="/">June 2018</Link>
          </li>
          <li>
            <Link to="/">May 2018</Link>
          </li>
        </ol>
      </div>
    );
  }
}
