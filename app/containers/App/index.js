import React, { Component } from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';

import {
  isMobileCheck,
} from '../../actions/user';

import Login from '../Login/index'
import LandingPage from '../LandingPage/LandingPage';
import SettingsLayout from '../Settings/SettingsLayout/SettingsLayout';
import NotFoundPage from './../NotFoundPage/NotFoundPage';
import CardList from '../CardList/index';
class App extends Component {

  constructor({ fnIsMobileCheck }) {
    super();

    this.state = {
      load: false,
    };

    fnIsMobileCheck();
  }

  render() {
    const canonical = window.location.href.toLowerCase();

    return (
      <div>
        <Helmet>
          <meta name={'viewport'} content={'width=device-width, initial-scale=1'} />
          <link rel="canonical" href={canonical} />
        </Helmet>
        <Switch>
          <Route exact path="/login" component={Login} />
          <Route exact path="/itemList" component={CardList} />
          <Route exact path="/" component={LandingPage} />
          <Route path="/settings/" component={SettingsLayout} />
          <Route component={NotFoundPage} />
        </Switch>
      </div>
    );
  }
}

App.propTypes = {
  fnIsMobileCheck: PropTypes.func.isRequired,
};

const withConnect = connect(() => ({
}), {
  fnIsMobileCheck: isMobileCheck,
});

export default withRouter(compose(
  withConnect,
)(App));

