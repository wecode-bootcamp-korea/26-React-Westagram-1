import React, { Component } from 'react';
import Comments from './Comments';

class Feed extends Component {
  render() {
    const {
      input,
      commentBox,
      commentUpdate,
      onInputChange,
      clickUpdate,
      onRemove,
    } = this.props;
    return (
      <div>
        <div className="feed">
          <div className="profile">
            <div className="profileInfo">
              <img
                className="profileImage"
                src="/images/ChangminJeon/myprofile.jpeg"
                alt="profile"
              />
              <span>JeonChangMin</span>
            </div>
            <div>
              <i className="fas fa-ellipsis-h" />
            </div>
          </div>
          <div>
            <img
              className="articleImage"
              src="/images/ChangminJeon/brother.jpeg"
              alt="brother"
            />
          </div>
          <div className="IconBox">
            <div className="leftIcons">
              <img src="/images/ChangminJeon/redheart.png" alt="heart" />
              <img src="/images/ChangminJeon/speech.png" alt="speechBubble" />
              <img src="/images/ChangminJeon/plane.png" alt="paperplane" />
            </div>
            <div className="rightIcon">
              <img src="/images/ChangminJeon/bookmark.png" alt="bookmark" />
            </div>
          </div>
          <div className="likeContainer">
            <span id="likeNumbers">좋아요 10개</span>
          </div>
          <ul className="comments">
            <Comments comment={commentBox} onRemove={onRemove} />
          </ul>
          <div className="commentBox">
            <img src="/images/ChangminJeon/smile.png" alt="smile" />
            <input
              value={input}
              type="text"
              className="commentInput"
              placeholder="댓글달기..."
              onKeyPress={commentUpdate}
              onChange={onInputChange}
            />
            <div
              className={input ? 'onUploadButton' : 'offUploadButton'}
              onClick={clickUpdate}
            >
              게시
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Feed;
