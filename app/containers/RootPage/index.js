/**
 * RootPage HoC to show the HomePage if the user has not authenticated,
 * or show the AppPage for authenticated users.
 */

import React from 'react';

import { isAuthenticated } from 'utils/auth';
import HomePage from 'containers/HomePage/Loadable';
import AppPage from 'containers/AppPage/Loadable';

const RootPage = ({ ...props }) =>
  isAuthenticated() ? <AppPage {...props} /> : <HomePage {...props} />;

export default RootPage;
