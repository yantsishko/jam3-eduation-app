import React, { Component } from 'react';
import Quill from 'quill';
import TextField from '@material-ui/core/TextField';

import Header from '../../../components/header';
import TagsSelector from '../../../components/TagsSelector';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import { addNewMaterial, getTags } from './../../../actions/materials';

import s from './styles.less';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { compose } from 'redux';

class AddMaterial extends Component {
  constructor() {
    super();
    this.state = {
      title: '',
      difficulty: 'ELEMENTARY',
      topic: [],
    };
  }

  handleChange = (e) =>  {
    this.setState({ title: e.target.value })
  };

  componentDidMount() {
    console.log('2222');
    this.props.getTags();
    this.quill = new Quill(document.getElementById('editor'), {
      modules: {
        toolbar: [
          [{ header: [1, 2, false] }],
          ['bold', 'italic', 'underline'],
          ['image', 'code-block']
        ],
      },
      placeholder: 'Данные материала',
      theme: 'snow',
    });
  }

  handleSubmit = async () => {
    this.quill.blur();
    this.setState({ isLoading: true });
    const container = document.getElementById('editor');
    const customHtml = container.querySelector('.ql-editor').innerHTML;

    console.log({
      title: this.state.title,
      description: customHtml,
      difficulty: this.state.difficulty,
      topic: this.state.topic,
    });

    await addNewMaterial({
      title: this.state.title,
      description: customHtml,
      difficulty: 'INTERMEDIATE',
      tags: this.state.topic,
    });
  };

  handleChangeSelect = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  onSelect = (data) => {
    this.setState({
      topic: data,
    });
  };

  render() {
    return (
      <div>
        <Header history={this.props.history} />
        <div className="container">
          <div className="row">
            <div className="col-sm">
              <h2>Добавить материал</h2>
            </div>
          </div>
          <div className="row">
            <div className="col-sm">
              <TextField
                label="Заголовок"
                defaultValue=""
                className={s.input}
                margin="normal"
                onChange={this.handleChange}
                value={this.state.title}
              />
            </div>
          </div>
          <div className="row" className={s.form}>
            <div className="col-sm">
              <FormControl>
                <InputLabel htmlFor="age-simple">Сложность</InputLabel>
                <Select
                  value={this.state.difficulty}
                  onChange={this.handleChangeSelect}
                  inputProps={{
                    name: 'difficulty',
                    id: 'age-simple',
                  }}
                >
                  <MenuItem value={'ELEMENTARY'}>Элементарный</MenuItem>
                  <MenuItem value={'INTERMEDIATE'}>Средний</MenuItem>
                  <MenuItem value={'ADVANCED'}>Повышенный</MenuItem>
                  <MenuItem value={'PROFICIENT'}>Профессионал</MenuItem>
                  <MenuItem value={'UNBELIEVABLE'}>Эксперт</MenuItem>
                </Select>
              </FormControl>
            </div>
          </div>
          <div className="row">
            <div className="col-sm">
              <div id="editor" style={{ minHeight: '200px'}} />
            </div>
          </div>
          <div className="row" >
            <div className="col-sm">
              <TagsSelector onSelect={this.onSelect} tags={this.props.materials.tags} />
            </div>
          </div>
          <div className="row" >
            <div className="col-sm">
              <div style={ { display: 'flex', justifyContent: 'space-between' }} className="mt-2">
                <button className="btn btn-primary" onClick={ this.handleSubmit }>Опубликовать</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

const withConnect = connect((state) => ({
  materials: state.get('materials'),
}), {
  getTags,
});

export default withRouter(compose(
  withConnect,
)(AddMaterial));
