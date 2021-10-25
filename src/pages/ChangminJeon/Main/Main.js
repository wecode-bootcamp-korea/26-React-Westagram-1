import React, { Component } from 'react';
import './Main.scss';
import Comments from './Comments';
class Main extends Component {
  constructor() {
    super();
    this.state = {
      id: 4,
      input: '',
      commentBox: [],
    };
  }

  componentDidMount() {
    fetch('http://localhost:3000/data/commentData.json', {
      method: 'GET', // GET method는 기본값이라서 생략이 가능합니다.
    }) // 예시코드에서는 이해를 돕기 위해 명시적으로 기입해뒀습니다.
      .then(res => res.json())
      .then(data => {
        this.setState({
          commentBox: data,
        });
      });
  }

  onInputChange = e => {
    this.setState({
      input: e.target.value,
    });
  };

  commentUpdate = event => {
    const { commentBox, input, id } = this.state;
    if (event.key === 'Enter' && input.length > 0) {
      const newCommentBox = commentBox.concat({ id: id, content: input });
      this.updateComment(newCommentBox, id);
    }
  };

  clickUpdate = () => {
    const { commentBox, input, id } = this.state;
    if (input.length > 0) {
      const newCommentBox = commentBox.concat({ id: id, content: input });
      this.updateComment(newCommentBox, id);
    }
  };

  updateComment = (newCommentBox, id) => {
    this.setState({
      id: id + 1,
      commentBox: newCommentBox,
      input: '',
    });
  };
  render() {
    const { input, commentBox } = this.state;
    const { commentUpdate, onInputChange, clickUpdate } = this;
    return (
      <div className="mainContainer">
        <div className="main">
          <div className="feeds">
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
              <Comments comment={commentBox} />
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
                className="uploadButton"
                style={{ opacity: input.length > 0 ? 1 : 0.3 }}
                onClick={clickUpdate}
              >
                게시
              </div>
            </div>
          </div>
          <div className="mainRight">
            <div className="rightProfile">
              <img
                src="/images/ChangminJeon/myprofile.jpeg"
                alt="profileImage"
                className="RightMyProfile"
              />
              <div className="RightName">
                <p className="EngName">JeonChangMin</p>
                <p className="KoreanName">전창민</p>
              </div>
            </div>
            <div className="story">
              <div className="storyBar">
                <p className="KoreanStory">스토리</p>
                <p className="EngStory">모두보기</p>
              </div>
              <div className="storyFriends">
                <ul className="storyLists">
                  <li className="storyList">
                    <img src="/images/ChangminJeon/jjanggu.jpeg" alt="myimg" />
                    <div>
                      <p className="listName">ChangMin</p>
                      <p className="listTime">2시간전</p>
                    </div>
                  </li>
                  <li className="storyList">
                    <img src="/images/ChangminJeon/jjanggu.jpeg" alt="myimg" />
                    <div>
                      <p className="listName">ChangMin</p>
                      <p className="listTime">2시간전</p>
                    </div>
                  </li>
                  <li className="storyList">
                    <img src="/images/ChangminJeon/jjanggu.jpeg" alt="myimg" />
                    <div>
                      <p className="listName">ChangMin</p>
                      <p className="listTime">2시간전</p>
                    </div>
                  </li>
                  <li className="storyList">
                    <img src="/images/ChangminJeon/jjanggu.jpeg" alt="myimg" />
                    <div>
                      <p className="listName">ChangMin</p>
                      <p className="listTime">2시간전</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div className="recommend">
              <div className="recommendBar">
                <p className="KoreanRecommend">회원님을 위한 추천</p>
                <p className="EngRecommend">모두보기</p>
              </div>
              <div className="recommendFriends">
                <ul className="recommendLists">
                  <li className="recommendList">
                    <img src="/images/ChangminJeon/jjanggu.jpeg" alt="myimg" />
                    <div>
                      <p className="recommendName">ChangMin</p>
                      <p className="recommendPharse">회원님을 팔로우합니다.</p>
                    </div>
                    <a href="www.google.com" className="follow">
                      팔로우
                    </a>
                  </li>
                  <li className="recommendList">
                    <img src="/images/ChangminJeon/jjanggu.jpeg" alt="myimg" />
                    <div>
                      <p className="recommendName">ChangMin</p>
                      <p className="recommendPharse">회원님을 팔로우합니다.</p>
                    </div>
                    <a href="www.google.com" className="follow">
                      팔로우
                    </a>
                  </li>
                  <li className="recommendList">
                    <img src="/images/ChangminJeon/jjanggu.jpeg" alt="myimg" />
                    <div>
                      <p className="recommendName">ChangMin</p>
                      <p className="recommendPharse">회원님을 팔로우합니다.</p>
                    </div>
                    <a href="www.google.com" className="follow">
                      팔로우
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Main;
