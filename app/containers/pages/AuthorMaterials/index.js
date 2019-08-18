import React, { Component } from "react";
import Header from "./../../../components/header";
import CardList from "../../../components/CardList";
import Typography from "@material-ui/core/Typography";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import Input from "@material-ui/core/Input";
import Chip from "@material-ui/core/Chip";
import { connect } from "react-redux";
import { getAllMaterials, getAuthorMaterials } from "../../../actions/materials";
import { withRouter } from "react-router-dom";
import { compose } from "redux";

import s from "../UserMaterials/styles.less";

class AuthorMaterials extends Component {
  state = {
    tags: [],
    selectTags: [],
    newList:[],
  };

  componentDidMount() {
    this.props.getAuthorMaterials(this.props.match.params.id);

    fetch("https://ejam3.acarica.com/api/tag/all", {
      method: "GET",
      credentials: "include"
    })
      .then(data => data.json())
      .then(tags => this.setState({ tags }))
      .catch(console.log);

      this.getList([])
  }

  getList = tagList => {
    let key = "";
    tagList.map((tag, index, mas) => {
      if (index !== mas.length - 1) key += tag + ",";
      else key += tag;
    });

    fetch("https://ejam3.acarica.com/api/task/all?tags=" + key, {
      method: "GET",
      credentials: "include"
    })
      .then(data => data.json())
      .then(mas => this.setState({ newList: mas }))
      .catch(console.log);
  };

  render() {
    return (
      <div>
        <Header history={this.props.history} />
        <Typography variant="h6" className={s.title}>
          Материалы автора {!!this.props.materials.list.length && this.props.materials.list[0].author.name}
        </Typography>

        <CardList showAuthor list= {this.props.materials.list}/>
      </div>
    );
  }
}

const withConnect = connect(
  state => ({
    materials: state.get("materials")
  }),
  {
    getAllMaterials: getAllMaterials,
    getAuthorMaterials,
  }
);

export default withRouter(compose(withConnect)(AuthorMaterials));
