import React, { Component } from 'react';
import Quill from 'quill';
import Header from '../../../components/header';

export default class AddMaterial extends Component {
  constructor() {
    super();
    this.state = { text: '' }
  }

  handleChange = (value) =>  {
    this.setState({ text: value })
  };

  componentDidMount() {
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

    console.log(customHtml);

    // await saveAgreement(+localStorage.getItem('user'), {
    //   customHtml: customHtml,
    //   pathToPdf: '',
    //   participantName: this.state.participantName,
    // });

    // this.props.history.push(`/`);
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
              <div id="editor" style={{ minHeight: '200px'}} />
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
