import { Component } from 'react';

class Userprofile extends Component {
  render() {
    return (
      <div className="user_profile clearfix">
        <img src="/images/BoraPark/instagram-01.png" alt="instagram" />
        <p>
          <span className="title">Wecode_bootcamp</span>
          <br />
          WeCode | 위코드
        </p>
      </div>
    );
  }
}
class Story extends Component {
  render() {
    return (
      <div className="story">
        <div className="story-title clearfix">
          <h4>스토리</h4>

          <a href="#" className="all">
            모두 보기
          </a>
        </div>

        <div className="story-box">
          <a href="#" className="go-story">
            <img src="/images/BoraPark/instagram-02.png" alt="instagram" />
          </a>
          <a href="#" className="user-name">
            _Teletubbies_
          </a>
          <a href="#" className="time-stamp">
            분 전
          </a>
        </div>
        <div className="story-box">
          <a href="#" className="go-story">
            <img src="/images/BoraPark/instagram-03.png" alt="instagram" />
          </a>
          <a href="#" className="user-name">
            Dipsy_89
          </a>
          <a href="#" className="time-stamp">
            분 전
          </a>
        </div>
        <div className="story-box">
          <a href="#" className="go-story">
            <img src="/images/BoraPark/instagram-04.png" alt="instagram" />
          </a>
          <a href="#" className="user-name">
            Laa_Laa_2
          </a>
          <a href="#" className="time-stamp">
            분 전
          </a>
        </div>
        <div className="story-box">
          <a href="#" className="go-story">
            <img src="images/BoraPark/instagram-05.png" alt="instagram" />
          </a>
          <a href="#" className="user-name">
            Po_v
          </a>
          <a href="#" className="time-stamp">
            분 전
          </a>
        </div>
        <div className="story-box">
          <a href="#" className="go-story">
            <img src="/images/BoraPark/instagram-06.png" alt="instagram" />
          </a>
          <a href="#" className="user-name">
            sunshine_coco
          </a>
          <a href="#" className="time-stamp">
            분 전
          </a>
        </div>
      </div>
    );
  }
}

class Recommendation extends Component {
  render() {
    return (
      <div className="recom">
        <div className="recom-title clearfix">
          <h4>회원님을 위한 추천</h4>

          <a href="#" className="all">
            모두 보기
          </a>
        </div>

        <div className="recom-box">
          <a href="#" className="pro-img">
            <img src="/images/BoraPark/instagram-07.png" alt="instagram" />
          </a>
          <div className="follow-wrap">
            <a href="#" className="user-name">
              baobab_11
            </a>
            <p className="follower">sunshine_coco님 외 5명이 팔로우 합니다.</p>
          </div>

          <a href="#" className="follow">
            팔로우
          </a>
        </div>
        <div className="recom-box">
          <a href="#" className="pro-img">
            <img src="/images/BoraPark/instagram-08.png" alt="instagram" />
          </a>
          <div className="follow-wrap">
            <a href="#" className="user-name">
              baobab_22
            </a>
            <p className="follower">
              mangplate.seoul님 외 1명이 팔로우 합니다.
            </p>
          </div>

          <a href="#" className="follow">
            팔로우
          </a>
        </div>
        <div className="recom-box">
          <a href="#" className="pro-img">
            <img src="/images/BoraPark/instagram-09.png" alt="instagram" />
          </a>
          <div className="follow-wrap">
            <a href="#" className="user-name">
              baobab_33
            </a>
            <p className="follower">Code_Park님 외 13명이 팔로우 합니다.</p>
          </div>

          <a href="#" className="follow">
            팔로우
          </a>
        </div>
      </div>
    );
  }
}
class FootNav extends Component {
  render() {
    return (
      <div className="foot-box">
        <p className="foot-nav">
          <a href="#">Instagram 정보</a> ·<a href="#">지원</a> ·
          <a href="#">홍보 센터</a> ·<a href="#">API</a> ·<br />
          <a href="#">채용 정보</a> ·<a href="#">개인정보처리방침</a> ·
          <a href="#">약관</a> ·<a href="#">디렉터리</a> ·<a href="#">프로필</a>{' '}
          ·<a href="#">해시태그</a>
          <a href="#">언어</a>
        </p>

        <p className="copy">&copy; 2019 INSTAGRAM</p>
      </div>
    );
  }
}
class Aside extends Component {
  render() {
    return (
      <aside>
        <Userprofile />
        <Story />
        <Recommendation />
        <FootNav />
      </aside>
    );
  }
}

export default Aside;
