import { Component } from 'react';

class Profile extends Component {
  render() {
    return (
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
    );
  }
}

class InnerFeed extends Component {
  render() {
    return (
      <>
        <div className="inner-feed">
          <a href="#">
            <img src="/images/BoraPark/feed.png" alt="피드 이미지" />
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
          <div className="inner-text">
            <div className="top-wrap">
              <p className="userId">jin_love2</p>
              <p className="msg">맛있겠다... 👍👍👀</p>
              <a href="#" className="moreTxt">
                더 보기
              </a>
            </div>

            <div className="bottom-wrap">
              <p className="userId">wstory_2021</p>
              <p className="msg">
                헐 카나페에 샐러드 고기 조합이라니!!!!! 넘 맛날듯!!!😍😍
              </p>
              <a href="#" className="heartTag">
                ♡
              </a>
            </div>
          </div>
        </div>
      </>
    );
  }
}
class ChtFrm extends Component {
  render() {
    return (
      <form className="chatFrm">
        <input type="text" className="chatBox" placeholder="댓글 달기..." />

        <button type="submit" className="uploadBtn">
          게시
        </button>
      </form>
    );
  }
}

class Feeds extends Component {
  render() {
    return (
      <>
        <Profile />
        <InnerFeed />
        <ChtFrm />
      </>
    );
  }
}

export default Feeds;
