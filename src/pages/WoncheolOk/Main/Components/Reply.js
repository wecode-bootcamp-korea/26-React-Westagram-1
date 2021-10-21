import React, { Component } from 'react';

export class Reply extends Component {
  render() {
    return (
      <div>
        <ul id="replies" />

        <div className="pushedMinutesAgo"> 19분 전 </div>

        <form id="replyInputContainer">
          <input type="text" placeholder="댓글 달기" id="replyInput" />
          <button type="button" id="replySubmit" disabled>
            게시
          </button>
        </form>
      </div>
    );
  }
}

export default Reply;
