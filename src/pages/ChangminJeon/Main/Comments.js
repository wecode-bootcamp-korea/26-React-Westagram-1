import React, { Component } from 'react';

class Comments extends Component {
  render() {
    const { comment, onRemove } = this.props;
    return comment.map(comment => {
      return (
        <li key={comment.id} className="comment">
          <span>{comment.content}</span>
          <span className="deleteButton" onClick={() => onRemove(comment.id)}>
            x
          </span>
        </li>
      );
    });
  }
}

export default Comments;
