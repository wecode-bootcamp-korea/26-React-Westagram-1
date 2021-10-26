import React, { Component } from 'react';

class Comments extends Component {
  render() {
    const { comment } = this.props;
    const box = comment.map(comment => {
      return (
        <li key={comment.id} className="comment">
          {comment.content}
        </li>
      );
    });
    return <>{box}</>;
  }
}

export default Comments;
