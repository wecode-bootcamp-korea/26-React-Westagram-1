import React, { Component } from 'react';
import Comment from './Comment/Comment';

export class Feed extends Component {
  constructor(props) {
    super(props);
    this.state = {
      comment: '',
      commentList: [],
      commnetValue: '',
    };
    this.inputRef = React.createRef();
  }

  handleComment = e => {
    this.setState({ comment: e.target.value });
  };

  handleClick = e => {
    if (this.state.comment.length > 0) {
      this.setState({
        commentList: this.state.commentList.concat(this.state.comment),
        comment: '',
      });
    }
    this.inputRef.current.value = '';
  };

  componentDidMount() {
    fetch('http://localhost:3000/data/commentData.json', {
      method: 'GET', // GET method는 기본값이라서 생략이 가능합니다.
    }) // 예시코드에서는 이해를 돕기 위해 명시적으로 기입해뒀습니다.
      .then(res => res.json())
      .then(data => {
        this.setState({
          commentList: data,
        });
      });
  }

  render() {
    const { commentList, commnetValue } = this.state;

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
              <span className="userId">{this.props.name}</span>
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
            <img src={this.props.img} alt="feedPhoto" className="feedPhoto" />
          </div>
          <div className="icons">
            <div className="icon">
              <button className="spriteImg heartImg" />
              <button className="spriteImg commentImg" />
              <button className="spriteImg shareImg" />
            </div>
            <button className="spriteImg bookmarkImg" />
          </div>
          <div className="info">
            <div className="like">winter님 외 2명이 좋아합니다.</div>
            <div className="contents">
              <span className="contentName">{this.props.name} &nbsp;</span>
              <span className="content"> {this.props.content} </span>
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
              value={commnetValue}
              ref={this.inputRef}
              onChange={this.handleComment}
            />
            <button className="post" onClick={this.handleClick}>
              게시
            </button>
          </form>
        </article>
      </feed>
    );
  }
}

export default Feed;
