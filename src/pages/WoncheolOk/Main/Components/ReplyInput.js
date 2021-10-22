import React, { Component } from 'react';

export class ReplyInput extends Component {
  render() {
    return (
      <div>
        <li className="eachReply">
          <a href="/main-WoncheolOK" className="inline">
            <span className="bold">Urasawa_Naoki</span>
          </a>
          <span>{this.props.value}</span>
          <span className="deleteReply"> x </span>
        </li>
      </div>
    );
  }
}

export default ReplyInput;
