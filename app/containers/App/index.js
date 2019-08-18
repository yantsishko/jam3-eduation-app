import React, { Component } from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { ToastContainer, toast } from 'react-toastify';

import Login from '../Login/index'
import LandingPage from '../LandingPage/LandingPage';
import Profile from '../pages/Profile';
import AddMaterial from '../pages/AddMaterial';
import SettingsLayout from '../Settings/SettingsLayout/SettingsLayout';
import NotFoundPage from './../NotFoundPage/NotFoundPage';
import UserMaterials from './../pages/UserMaterials';
import MaterialInfo from '../MaterialInfo'

import { addNotyficationCounter } from './../../actions/materials';

class App extends Component {

  constructor() {
    super();

    this.state = {
      loaded: false,
    };
  }

  async componentDidMount() {
    const userId = localStorage.getItem('userId');

    if (!userId) {
      let formData = new FormData();
      formData.append('username', 'norris');
      formData.append('password', 'qwerty');
      await (await fetch('https://ejam3.acarica.com/api/login', {
        method: 'POST',
        body: formData,
        credentials: 'include',
      })).json();
    }

    this.setState({
      loaded: true,
    });

    setTimeout(() => {
      this.props.addNotyficationCounter();
      toast.warn("Тишко Ян добавил новый материал", {
        autoClose: 3000,
      });
    }, 10000);

    setTimeout(() => {
      this.props.addNotyficationCounter();
      toast.warn("Ваш материал Теория Дарвина опубликован", {
        autoClose: 3000,
      });
    }, 30000);
  }

  render() {
    const canonical = window.location.href.toLowerCase();

    return this.state.loaded && (
      <div>
        <Helmet>
          <meta name={'viewport'} content={'width=device-width, initial-scale=1'} />
          <link rel="canonical" href={canonical} />
        </Helmet>
        <Switch>
          <Route exact path="/login" component={Login} />
          <Route exact path="/userMaterials" component={UserMaterials} />
          <Route exact path="/materials/:id" component={MaterialInfo} />
          <Route exact path="/" component={Profile} />
          <Route path="/settings/" component={SettingsLayout} />
          <Route path="/profile" component={Profile} />
          <Route path="/addMaterial" component={AddMaterial} />
          <Route component={NotFoundPage} />
        </Switch>
        <ToastContainer />
      </div>
    );
  }
}

App.propTypes = {
};

const withConnect = connect(() => ({
}), {
  addNotyficationCounter,
});

export default withRouter(compose(
  withConnect,
)(App));

