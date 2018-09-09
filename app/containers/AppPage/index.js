/*
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs.
 */

import React from 'react';
import styled from 'styled-components';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

import { getUser } from 'utils/auth';

const AppWrapper = styled.div`
  margin-top: 75px;
`;

/* eslint-disable react/prefer-stateless-function */
export default class AppPage extends React.PureComponent {
  constructor(props) {
    super(props);

    if (typeof document === 'object' && typeof document.getElementsByTagName === 'function') {
      document.getElementsByTagName('body')[0].style.overflow = 'initial';
    }

    this.state = { user: getUser() };
  }

  render() {
    return (
      <AppWrapper>
        <AppBar>
          <Toolbar>
            <Typography variant="title" color="inherit">
              SpotiFaves
            </Typography>
          </Toolbar>
        </AppBar>
        <h2>Hello {this.state.user.name}!</h2>
      </AppWrapper>
    );
  }
}
