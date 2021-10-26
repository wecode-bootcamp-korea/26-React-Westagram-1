import React, { Component } from 'react';

export class Comment extends Component {
  render() {
    // const makeComment =
    console.log('?');
    return (
      <li className="comment">
        <span>{this.props.name} &nbsp;</span>
        <span>{this.props.comment}</span>
        <button
          className={
            this.props.like
              ? 'spriteImg heartImg heartRed'
              : 'spriteImg heartImg heartWhite'
          }
        />
        <button className="spriteImg removeComment" />
      </li>
    );
  }
}

export default Comment;
