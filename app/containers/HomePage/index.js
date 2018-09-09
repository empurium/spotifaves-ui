/*
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs.
 */

import React from 'react';
import Button from '@material-ui/core/Button';

/* eslint-disable react/prefer-stateless-function */
export default class HomePage extends React.PureComponent {
  login() {
    // Will move this hardcoding soon...
    window.location = 'http://spotifaves.test:8080/auth/spotify';
  }

  render() {
    return (
      <div>
        <h2>Home</h2>
        <br />
        <Button variant="contained" color="primary" onClick={this.login}>
          Login
        </Button>
      </div>
    );
  }
}
