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
import { getAllMaterials } from "../../../actions/materials";
import { withRouter } from "react-router-dom";
import { compose } from "redux";

import s from "../UserMaterials/styles.less";

class Profile extends Component {
  state = {
    tags: [],
    selectTags: [],
    newList:[],
  };

  componentDidMount() {
    this.props.getAllMaterials();

    fetch("https://ejam3.acarica.com/api/tag/all", {
      method: "GET",
      credentials: "include"
    })
      .then(data => data.json())
      .then(tags => this.setState({ tags }))
      .catch(console.log);

      this.getList([])
  }


  changeTag = ({ target }) => {
    this.setState({selectTags: target.value})
    this.getList(target.value);
  };

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
          Последние добавленные
        </Typography>

        <div className={s.filter}>
          <FormControl className={s.formControl}>
            <InputLabel htmlFor="select-multiple-chip">Фильтр</InputLabel>
            <Select
              multiple
              value={this.state.selectTags}
              onChange={this.changeTag}
              input={<Input id="select-multiple-chip" />}
              renderValue={selected => (
                <div className={s.chips}>
                  {selected.map(value => (
                    <Chip key={value} label={value} className={s.chip} />
                  ))}
                </div>
              )}
              MenuProps={{}}
            >
              {this.state.tags.map(name => (
                <MenuItem key={name} value={name}>
                  {name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </div>

        <CardList showAuthor list= {this.state.newList}/>
      </div>
    );
  }
}

const withConnect = connect(
  state => ({
    materials: state.get("materials")
  }),
  {
    getAllMaterials: getAllMaterials
  }
);

export default withRouter(compose(withConnect)(Profile));
