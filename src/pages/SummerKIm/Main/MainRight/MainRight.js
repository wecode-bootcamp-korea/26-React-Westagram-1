import React, { Component } from 'react';

export class MainRight extends Component {
  // TODO: 스토리, 추천 맵으로 구현
  render() {
    return (
      <mainRight className="mainRight">
        <div className="profileRight">
          <img
            src="./images/SummerKim/woody_.jpeg"
            alt="myProfileImg"
            className="myImg"
          />
          <button className="myId">
            summer
            <div className="myInfo">wecode 26기 김여름</div>
          </button>
          <button className="switch" />
        </div>
        <div className="suggestion">
          <span className="topofBox">스토리</span>
          <button className="storyAll">모두 보기</button>
          <ul className="stories">
            <li className="personStory">
              <img
                src="./images/SummerKim/woody_.jpeg"
                alt="personStoryImg"
                className="personStoryImg"
              />
              winter
            </li>
            <li className="personStory">
              <img
                src="./images/SummerKim/woody_.jpeg"
                alt="personStoryImg"
                className="personStoryImg"
              />
              winter
            </li>
            <li className="personStory">
              <img
                src="./images/SummerKim/woody_.jpeg"
                alt="personStoryImg"
                className="personStoryImg"
              />
              winter
            </li>
            <li className="personStory">
              <img
                src="./images/SummerKim/woody_.jpeg"
                alt="personStoryImg"
                className="personStoryImg"
              />
              winter
            </li>
            <li className="personStory">
              <img
                src="./images/SummerKim/woody_.jpeg"
                alt="personStoryImg"
                className="personStoryImg"
              />
              winter
            </li>
            <li className="personStory">
              <img
                src="./images/SummerKim/woody_.jpeg"
                alt="personStoryImg"
                className="personStoryImg"
              />
              winter
            </li>
          </ul>
        </div>
        <div className="push">
          <span className="topofBox">회원님을 위한 추천</span>
          <button className="pushAll">모두 보기</button>
          <ul className="pushWrap">
            <li className="personStory">
              <img
                src="./images/SummerKim/woody_.jpeg"
                alt="personStoryImg"
                className="personStoryImg"
              />
              winter
            </li>
            <li className="personStory">
              <img
                src="./images/SummerKim/woody_.jpeg"
                alt="personStoryImg"
                className="personStoryImg"
              />
              winter
            </li>
            <li className="personStory">
              <img
                src="./images/SummerKim/woody_.jpeg"
                alt="personStoryImg"
                className="personStoryImg"
              />
              winter
            </li>
            <li className="personStory">
              <img
                src="./images/SummerKim/woody_.jpeg"
                alt="personStoryImg"
                className="personStoryImg"
              />
              winter
            </li>
          </ul>
        </div>
      </mainRight>
    );
  }
}

export default MainRight;
