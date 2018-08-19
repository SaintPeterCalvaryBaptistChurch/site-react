import React, { Component } from 'react';
import moment from 'moment';

export default class Post extends Component {
  render() {
    const { date, title, author, content } = this.props;

    return (
      <div className="ui-post">
        <h2>{title}</h2>
        <p className="ui-post-meta">
          {moment(date).format('MMMM Do, YYYY')} by{' '}
          <span className="ui-post-author">{author}</span>
        </p>
        <hr />
        <p>{content}</p>
      </div>
    );
  }
}
