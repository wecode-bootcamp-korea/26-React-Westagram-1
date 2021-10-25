import React, { Component } from 'react';
import './Nav.scss';

export class Login extends Component {
  render() {
    return (
      <nav>
        <div className="navLogo">
          <img src="/images/ChangminJeon/instagram.png" alt="instagramLogo" />
          <div className="contour" />
          <a href="https://www.instagram.com/" className="logoTitle">
            Westagram
          </a>
        </div>
        <div className="navSearch">
          <input className="navInput" type="text" placeholder="검색" />
        </div>
        <div className="navIcons">
          <img
            className="navIcon"
            src="/images/ChangminJeon/explore.png"
            alt="explore"
          />
          <img
            className="navIcon"
            src="/images/ChangminJeon/heart.png"
            alt="heart"
          />
          <img
            className="navIcon"
            src="/images/ChangminJeon/profile.png"
            alt="profile"
          />
        </div>
      </nav>
    );
  }
}

export default Login;
