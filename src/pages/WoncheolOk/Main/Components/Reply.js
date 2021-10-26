import React, { Component } from 'react';
import ReplyInput from './ReplyInput';

class Reply extends Component {
  constructor() {
    super();
    this.state = {
      newReply: '',
      replies: [],
    };
  }

  handledInput = e => {
    if (e.target.value.length > 0) {
      this.setState({
        newReply: [e.target.value],
      });
    }
  };

  btnClick = e => {
    this.setState({
      replies: [...this.state.replies, ...this.state.newReply],
      newReply: '',
    });
  };

  inputKeyPress = e => {
    if (e.key === 'Enter' && this.state.newReply.length > 0) {
      this.btnClick();
      e.preventDefault();
      return;
    }
  };

  render() {
    return (
      <div>
        <ul id="replies">
          {this.state.replies.map((reply, index) => {
            return <ReplyInput key={index} value={reply} />;
          })}
        </ul>

        <div className="pushedMinutesAgo"> 19분 전 </div>

        <form id="replyInputContainer" action="#">
          <input
            name="replyMessage"
            type="text"
            placeholder="댓글 달기"
            id="replyInput"
            onChange={this.handledInput}
            onKeyPress={this.inputKeyPress}
            value={this.state.newReply}
          />
          <button
            type="button"
            id="replySubmit"
            onClick={this.btnClick}
            disabled={this.state.newReply.length > 0 ? false : true}
          >
            게시
          </button>
        </form>
      </div>
    );
  }
}

export default Reply;
