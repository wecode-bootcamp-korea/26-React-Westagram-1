import React, { Component } from 'react';
import ChtFrm from './ChtFrm';
import ChtList from './ChtList';

class InnerFeed extends Component {
  render() {
    const {
      feeds,
      input,
      handleRemove,
      handleChange,
      handleCreate,
      handleKeyPress,
    } = this.props;
    // console.log(feeds);
    return (
      feeds &&
      feeds.map(comment => {
        return (
          <div className="feed-wrapper" key={comment.id}>
            <div className="inner-top">
              <div className="profile">
                <a href="#">
                  <img src="/images/BoraPark/profile.png" alt="프로필 이미지" />
                  <p>Tinky_Winky_0</p>
                </a>
              </div>

              <a href="#" className="more">
                <img src="/images/BoraPark/ico_more.png" alt="more" />
              </a>
            </div>
            <div className="inner-feed">
              <a href="#">
                <img src={comment.url} alt="피드 이미지" />
              </a>
            </div>
            <div className="inner-bottom">
              <div className="inner-menu">
                <div className="left-img">
                  <a href="#">
                    <img src="/images/BoraPark/ico_like.png" alt="좋아요" />
                  </a>
                  <a href="#">
                    <img src="/images/BoraPark/ico_chat.png" alt="댓글달기" />
                  </a>
                  <a href="#">
                    <img
                      src="/images/BoraPark/ico_upload.png"
                      alt="퍼가기/공유하기"
                    />
                  </a>
                </div>

                <a href="#">
                  <img
                    src="/images/BoraPark/ico_save-instagram.png"
                    alt="저장하기"
                  />
                </a>
              </div>
              <p className="whoLikes">
                <img src="/images/BoraPark/instagram-01.png" alt="instagram" />
                wecode_bootcamp님 외 26명이 좋아합니다.
              </p>
            </div>

            <ChtList
              name={comment.name}
              lists={comment.lists}
              onRemove={handleRemove}
            />

            <ChtFrm
              value={input}
              onChange={handleChange}
              onKeyPress={handleKeyPress}
              onCreate={handleCreate}
            />
          </div>
        );
      })
    );
  }
}
export default InnerFeed;
