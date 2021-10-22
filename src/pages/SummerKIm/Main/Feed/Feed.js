import React, { Component } from 'react';
import Comment from './Comment/Comment';

export class Feed extends Component {
  constructor(props) {
    super(props);
    this.state = {
      comment: '',
      commentList: [],
      id: 'winter',
    };
  }

  handleClick = () => {
    // console.log(e);
    this.setState({
      commentList: [],
      commnet: '',
    });
    console.log(this.state.commentList);
  };

  handleComment = e => {
    this.setState({ comment: e.target.value });
    console.log(this.state.comment);
  };

  render() {
    return (
      <feed className="feed">
        <article className="article">
          <div className="top">
            <div className="topProfile">
              <img
                src="./images/SummerKim/Toy Story -2.jpeg"
                alt="profileImg"
                className="profileImg"
              />
              <span className="userId">summer</span>
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
            <img
              src="./images/SummerKim/Toy Story -2.jpeg"
              alt="feedPhoto"
              className="feedPhoto"
            />
          </div>
          <div className="icons">
            <div className="icon">
              <button className="spriteImg heartImg"></button>
              <button className="spriteImg commentImg"></button>
              <button className="spriteImg shareImg"></button>
            </div>
            <button className="spriteImg bookmarkImg"></button>
          </div>
          <div className="info">
            <div className="like">winter님 외 2명이 좋아합니다.</div>
            <div className="contents">
              <span className="content">winter</span>
              <button className="readmore">더 보기</button>
            </div>
            <div className="commentsWrap">
              <ul className="comments">
                {this.state &&
                  this.state.commentList.map(x => {
                    return (
                      <Comment
                        id={this.state.id}
                        comment={this.state.comment}
                      />
                    );
                  })}
              </ul>
            </div>
          </div>
          <div className="commentWrap">
            <input
              type="text"
              className="writeComment"
              placeholder="댓글 달기..."
              onChange={this.handleComment}
            />
            <button className="post" onClick={this.handleClick}>
              게시
            </button>
          </div>
        </article>
      </feed>
    );
  }
}

export default Feed;
