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
import { getUserList } from "../../../actions/materials";
import { connect } from "react-redux";
import s from "./styles.less";

class Profile extends Component {
  state = {
    tags: [],
    selectTags: [],
  };

  componentDidMount() {
    fetch("https://ejam3.acarica.com/api/task/author/all", {
      method: "GET",
      credentials: "include"
    })
      .then(data => data.json())
      .then(this.props.getUserList)
      .catch(console.log);

    fetch("https://ejam3.acarica.com/api/tag/all", {
      method: "GET",
      credentials: "include"
    })
      .then(data => data.json())
      .then(tags => this.setState({ tags }))
      .catch(console.log);
  }

  getList = () => {
    let newList = [];
    
    if(this.state.selectTags.length === 0){
      return this.props.list;
    }

    this.props.list.forEach(value => {
      this.state.selectTags.forEach(tag => {
        value.topic.forEach(topic => {
          if (tag === topic) newList.push(value)
        });
      });
    });
    return newList;
  };

  render() {
    return (
      <div>
        <Header history={this.props.history} />
        <Typography variant="h6" className={s.title}>
          Мои добавленные
        </Typography>
        <div className={s.filter}>
          <FormControl className={s.formControl}>
            <InputLabel htmlFor="select-multiple-chip">Tag</InputLabel>
            <Select
              multiple
              value={this.state.selectTags}
              onChange={({target})=>this.setState({selectTags: target.value})}
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
                <MenuItem
                  key={name}
                  value={name}
                >
                  {name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </div>
        <CardList showAuthor={true} list={this.getList()} />
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
