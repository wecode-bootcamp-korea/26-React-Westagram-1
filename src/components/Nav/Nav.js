import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import '../Nav/Nav.scss';

class Nav extends Component {
  render() {
    return (
      <div className="navWrapper">
        <header>
          {/* nav */}
          <nav>
            <div className="logo clearfix">
              <a href="#" className="logoImg">
                <img
                  src="/images/WoncheolOk/instagramIcon.png"
                  alt="Westagram logo"
                />
              </a>

              <h1 className="logoTxt eng">
                <a href="#">Westagram</a>
              </h1>
            </div>

            <div className="search-box">
              <input type="text" placeholder="검색" />
            </div>

            <div className="icon-wrap">
              <a href="#">
                {/* <img src="/images/BoraPark/ico_explore.png" alt="explore" /> */}
                <img
                  src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/explore.png"
                  alt="explore icon"
                  className="navIcons"
                />
              </a>
              <a href="#">
                {/* <img src="/images/BoraPark/ico_heart.png" alt="heart" /> */}
                <img
                  src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/heart.png"
                  alt="heart icon"
                  className="navIcons"
                />
              </a>
              <a href="#">
                <img
                  src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/profile.png"
                  alt="profile icon"
                  className="navIcons"
                />
              </a>
            </div>
          </nav>
        </header>
      </div>
    );
  }
}
export default withRouter(Nav);
