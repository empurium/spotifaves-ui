/**
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs.
 */

import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import CssBaseline from '@material-ui/core/CssBaseline';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';

import HomePage from 'containers/HomePage/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';

// Create our Material UI theme
const theme = createMuiTheme({
  palette: {
    primary: { main: '#00d95f' },
    secondary: { main: '#4caf50' },
  },
});

export default function App() {
  return (
    <div>
      <Helmet titleTemplate="%s - Spotify Favorites" defaultTitle="Spotify Favorites">
        <meta
          name="description"
          content="See the new releases by your favorite artists on Spotify."
        />
      </Helmet>
      <CssBaseline />
      <MuiThemeProvider theme={theme}>
        <AppBar className="MuiAppBar">
          <Toolbar>
            <Typography variant="title" color="inherit">
              SpotiFaves
            </Typography>
          </Toolbar>
        </AppBar>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route component={NotFoundPage} />
        </Switch>
      </MuiThemeProvider>
    </div>
  );
}
