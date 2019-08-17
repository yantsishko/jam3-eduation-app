import React, { Component } from "react";
import Header from "./../../../components/header";
import CardList from "../../../components/CardList";
import Typography from "@material-ui/core/Typography";
import { getUserList } from "../../../actions/materials";
import { connect } from "react-redux";
import s from "./styles.less";

class Profile extends Component {
  componentDidMount() {
    fetch("https://lalalala.com")
      .then(this.props.getUserList)
      .catch(console.log);
  }

  render() {
    return (
      <div>
        <Header history={this.props.history} />
        <Typography variant="h6" className={s.title}>
          Мои добавленные
        </Typography>
        <CardList list={this.props.list} />
      </div>
    );
  }
}

export default connect(
  stage => ({
    list: stage.get("materials").cardList
  }),
  {
    getUserList
  }
)(Profile);
