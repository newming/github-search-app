import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from '../containers/App/App.js';
import Home from '../containers/Home/Home.js';
import About from '../containers/About/About.js';
import Profile from '../containers/Profile/Profile.js';
import PageNotFound from '../containers/Shared/PageNotFound.js';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={Home} />
    <Route path="about" component={About} />
    <Route path="profile/:username" component={Profile} />
    <Route path="*" component={PageNotFound} />
  </Route>
)
