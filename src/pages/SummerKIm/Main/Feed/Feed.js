import React, { Component } from 'react';
import Comment from './Comment/Comment';

export class Feed extends Component {
  constructor(props) {
    super(props);
    this.state = {
      comment: '',
      commentList: [],
    };
  }

  handleComment = e => {
    this.setState({ comment: e.target.value });
  };

  handleClick = e => {
    e.preventDefault();

    if (this.state.comment.length > 0) {
      this.setState({
        commentList: this.state.commentList.concat(this.state.comment),
        comment: '',
      });
    }
  };

  render() {
    const { comment } = this.state;
    const {
      name,
      img,
      content,
      likeFeed,
      likedUserName,
      likedCount,
      commentList,
    } = this.props;

    return (
      <feed className="feed">
        <article className="article">
          <div className="top">
            <div className="topProfile">
              <img
                src="./images/SummerKim/woody_.jpeg"
                alt="profileImg"
                className="profileImg"
              />
              <span className="userId">{name}</span>
            </div>
            <button>
              <img
                src="./images/SummerKim/free-icon-more-options-17764.png"
                alt="more"
                className="seemore"
              />
            </button>
          </div>
          <div className="photos">
            <img src={img} alt="feedPhoto" className="feedPhoto" />
          </div>
          <div className="icons">
            <div className="icon">
              <button
                className={!likeFeed ? 'spriteImg white' : 'spriteImg red'}
              />
              <button className="spriteImg commentImg" />
              <button className="spriteImg shareImg" />
            </div>
            <button className="spriteImg bookmarkImg" />
          </div>
          <div className="info">
            <div className="like">
              {likedUserName}님 외 {likedCount}명이 좋아합니다.
            </div>
            <div className="contents">
              <span className="contentName">{name}&nbsp;</span>
              <span className="content"> {content} </span>
              <button className="readmore" />
            </div>
            <div className="commentsWrap">
              <ul className="comments">
                {commentList.map(comment => {
                  return (
                    <Comment
                      key={comment.id}
                      name={comment.userName}
                      comment={comment.content}
                      like={comment.isLiked}
                    />
                  );
                })}
              </ul>
            </div>
          </div>
          <form action="#" className="commentWrap">
            <input
              type="text"
              className="writeComment"
              placeholder="댓글 달기..."
              value={comment}
              onChange={this.handleComment}
            />
            <button
              className={comment.length > 1 ? 'activate' : 'deactivate'}
              onClick={this.handleClick}
            >
              게시
            </button>
          </form>
        </article>
      </feed>
    );
  }
}

export default Feed;
