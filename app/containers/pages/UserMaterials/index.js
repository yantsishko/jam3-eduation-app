import React, { Component } from 'react';
import Header from './../../../components/header';
import CardList from '../../../components/CardList';
import Typography from '@material-ui/core/Typography';
import s from './styles.less';

export default class Profile extends Component {
  componentDidMount() {
    // load data
  }

  render() {
    return <div>
      <Header history={this.props.history} />
      <Typography variant="h6" className={s.title}>
        Мои добавленные
      </Typography>
      <CardList />
    </div>
  }
}
