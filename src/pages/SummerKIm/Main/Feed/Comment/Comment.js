import React, { Component } from 'react';

export class Comment extends Component {
  render() {
    // const makeComment =
    console.log('?');
    return (
      <li className="comment">
        <span>{this.props.id}</span>
        <span>{this.props.comment}</span>
        <button className="spriteImg heartImg"></button>
        <button className="spriteImg removeComment"></button>
      </li>
    );
  }
}

export default Comment;
