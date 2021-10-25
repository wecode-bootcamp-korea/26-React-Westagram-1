import React, { Component } from 'react';

class Comments extends Component {
  render() {
    const { comment } = this.props;
    const box = comment.map((text, index) => (
      <li key={index} className="comment">
        {text}
      </li>
    ));

    return <>{box}</>;
  }
}

export default Comments;
