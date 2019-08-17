import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import classnames from 'classnames';
import SettingsContent from './SettingsContent/SettingsContent';
import Footer from './../../../components/footer/footer';
import Header from './../../../components/header/header';

import s from './style.less';

class SettingsLayout extends Component {
  constructor() {
    super();
  }

  render() {
    const { user: { isRegistered } } = this.props;

    return isRegistered && (
      <div>
        <Header />
        <SettingsContent />
        <Footer />
      </div>
    );
  }
}

SettingsLayout.propTypes = {
  user: PropTypes.shape().isRequired,
};

const withConnect = connect((state) => ({
  user: state.get('user'),
}), {});

export default compose(
  withConnect,
)(SettingsLayout);

