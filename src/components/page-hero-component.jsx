import * as React from 'react';
import { Jumbotron } from 'reactstrap';
import classnames from 'classnames';

export default props => {
  const { title, subtitle, background = '' } = props;
  const className = classnames('ui-page-hero', background.replace('-', ''));

  return (
    <Jumbotron className={className}>
      <div>
        <h2 className="display-4">{title}</h2>
        <hr className="small" />
        <p className="lead">{subtitle}</p>
      </div>
    </Jumbotron>
  );
};
