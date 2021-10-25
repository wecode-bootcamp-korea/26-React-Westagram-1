import React, { Component } from 'react';

export class Comment extends Component {
  render() {
    // const makeComment =
    console.log('?');
    return (
      <li className="comment">
        <span>{this.props.name} &nbsp;</span>
        <span>{this.props.comment}</span>
        <button className="spriteImg heartImg" />
        <button className="spriteImg removeComment" />
      </li>
    );
  }
}

export default Comment;
