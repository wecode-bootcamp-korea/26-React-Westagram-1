import React, { Component } from 'react';
import { withRouter } from 'react-router';
import './Nav.scss';

export class Nav extends Component {
  render() {
    return (
      <nav className="navContainer">
        <div className="navLeftInsta">
          <a href="/main">
            <img
              src="/images/WoncheolOk/instagramIcon.png"
              alt="instagram icon"
              className="instaIcon"
            />
          </a>
          <div className="centerLine" />
          <a href="/main">
            <p className="instagram">Westagram</p>
          </a>
        </div>

        <div className="inputSearch">
          <i className="fa-solid fa-magnifying-glass" />
          <input type="text" placeholder="&#xF002; 검색" id="searchBar" />
        </div>

        <div className="navRightIcons">
          <a href="/main">
            <img
              src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/explore.png"
              alt="explore icon"
              className="navIcons"
            />
          </a>
          <a href="/main">
            <img
              src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/heart.png"
              alt="heart icon"
              className="navIcons"
            />
          </a>
          <a href="/main">
            <img
              src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/profile.png"
              alt="profile icon"
              className="navIcons"
            />
          </a>
        </div>
      </nav>
    );
  }
}

export default withRouter(Nav);
