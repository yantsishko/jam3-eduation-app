import React, { Component } from 'react';
import Header from './../../../components/header';
import CardList from '../../../components/CardList';
import Typography from '@material-ui/core/Typography';
import {connect} from 'react-redux';
import { getAllMaterials } from '../../../actions/materials';
import { withRouter } from 'react-router-dom';
import { compose } from 'redux';

import s from '../UserMaterials/styles.less';

class Profile extends Component {
  componentDidMount() {
    this.props.getAllMaterials();
  }

  render() {
    return <div>
      <Header history={this.props.history} />
      <Typography variant="h6" className={s.title}>
        Последние добавленные
      </Typography>
      <CardList showAuthor list={this.props.materials.list} />
    </div>
  }
}

const withConnect = connect((state) => ({
  materials: state.get('materials'),
}), {
  getAllMaterials: getAllMaterials,
});

export default withRouter(compose(
  withConnect,
)(Profile));

