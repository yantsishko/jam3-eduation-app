import React, { Component } from 'react';
import commentBox from 'commentbox.io';

export default class Comments extends Component {
  componentDidMount() {
    this.removeCommentBox = commentBox('5723780961796096-proj');
  }

  componentWillUnmount() {

    this.removeCommentBox();
  }

  render() {
    return (
      <div>
        <div className="commentbox" />
      </div>
    )
  }
}
