import React from 'react';
import { Helmet } from 'react-helmet';

/* eslint-disable react/prefer-stateless-function */
export default class NotFound extends React.PureComponent {
  render() {
    return (
      <div>
        <Helmet>
          <title>Not Found</title>
        </Helmet>
        <p>Loading...</p>
      </div>
    );
  }
}
