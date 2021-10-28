import React, { Component } from 'react';

export class Comment extends Component {
  render() {
    const { name, comment, like } = this.props;

    return (
      <li className="comment">
        <span className="commentId">{name} &nbsp;</span>
        <span>{comment}</span>
        <button
          className={
            like
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
