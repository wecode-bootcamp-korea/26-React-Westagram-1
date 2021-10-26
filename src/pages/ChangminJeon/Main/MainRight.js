import React, { Component } from 'react';

class MainRight extends Component {
  render() {
    return (
      <div>
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
    );
  }
}

export default MainRight;
