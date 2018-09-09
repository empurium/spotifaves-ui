/**
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs.
 */

import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import CssBaseline from '@material-ui/core/CssBaseline';
import { MuiThemeProvider } from '@material-ui/core/styles';

import theme from 'containers/App/theme';
import RootPage from 'containers/RootPage';
import NotFoundPage from 'containers/NotFoundPage/Loadable';

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
        <Switch>
          <Route exact path="/" component={RootPage} />
          <Route component={NotFoundPage} />
        </Switch>
      </MuiThemeProvider>
    </div>
  );
}
