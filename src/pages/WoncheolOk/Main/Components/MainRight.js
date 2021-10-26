import React, { Component } from 'react';
import RecommendedUsers from './RecommendedUsers';
import StoryUsers from './StoryUsers';

export class MainRight extends Component {
  render() {
    return (
      <div className="mainRight">
        <div className="myAccount">
          <a href="/main-woncheolok">
            <img
              src="/images/WoncheolOK/default_user_profile.png"
              alt="default profile"
              className="profileImg_normal"
            />
          </a>
          <a href="/main" className="username">
            Urasawa_Naoki
          </a>
        </div>

        <div className="storiesContainer">
          <header className="storiesHeader">
            <p className="stories">스토리</p>
            <p className="seeAll">모두 보기</p>
          </header>

          <StoryUsers />
          <StoryUsers />
          <StoryUsers />
          <StoryUsers />
          <StoryUsers />
        </div>

        <div className="recommendationContainer">
          <header className="recommendationHeader">
            <p className="stories">회원님을 위한 추천</p>
            <p className="seeAll">모두 보기</p>
          </header>
          <RecommendedUsers />
          <RecommendedUsers />
          <RecommendedUsers />
        </div>
      </div>
    );
  }
}

export default MainRight;
