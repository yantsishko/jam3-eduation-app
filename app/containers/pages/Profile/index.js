import React, { Component } from 'react';
import Header from './../../../components/header';

export default class Profile extends Component {
  componentDidMount() {
    // Check user type user/admin
  }

  render() {
    return <div>
      <Header history={this.props.history} />
    </div>
  }
}
