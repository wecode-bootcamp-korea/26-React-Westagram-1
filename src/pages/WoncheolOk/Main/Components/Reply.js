import React, { Component } from 'react';
import ReplyInput from './ReplyInput';

class Reply extends Component {
  constructor() {
    super();
    this.state = {
      id: 0,
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
    const { id, replies, newReply } = this.state;
    this.setState({
      id: id + 1,
      replies: [...replies, ...newReply],
      newReply: '',
    });
  };

  inputKeyPress = e => {
    const { newReply } = this.state;
    if (e.key === 'Enter' && newReply.length) {
      this.btnClick();
      e.preventDefault();
    }
  };

  render() {
    const { replies, newReply } = this.state;
    const { handledInput, inputKeyPress, btnClick } = this;
    return (
      <div>
        <ul id="replies">
          {replies.map((reply, id) => {
            return <ReplyInput key={id} value={reply} />;
          })}
        </ul>

        <div className="pushedMinutesAgo"> 19분 전 </div>

        <form id="replyInputContainer" action="#">
          <input
            name="replyMessage"
            type="text"
            placeholder="댓글 달기"
            id="replyInput"
            onChange={handledInput}
            onKeyPress={inputKeyPress}
            value={newReply}
          />
          <button
            type="button"
            id="replySubmit"
            onClick={btnClick}
            disabled={newReply.length ? false : true}
          >
            게시
          </button>
        </form>
      </div>
    );
  }
}

export default Reply;
