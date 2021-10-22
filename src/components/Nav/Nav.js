import React, { Component } from 'react';
import './Nav.scss';

export class Nav extends Component {
  render() {
    return (
      <nav className="nav">
        <container className="navContainer">
          <div className="logo">
            <div className="spriteImg logoImg"></div>
            <span className="logoText">instagram</span>
          </div>
          <div className="search">
            <input type="search" className="search searchInput" />
            <label Htmlfor="search">
              <span className="searchLabel">검색</span>
              <span className="spriteImg searchImg"></span>
            </label>
            <container className="searchContainer">
              <ul className="userList"></ul>
            </container>
          </div>
          <div className="iconWrap">
            <div className="explore">
              <a href="#" className="explore"></a>
              <div className="spriteImg exploreImg"></div>
            </div>
            <div className="likes">
              <button className="likes">
                <div className="spriteImg likeImg"></div>
              </button>
            </div>
            <div className="profile">
              <a href="#" className="profile"></a>
              <div className="spriteImg personImg"></div>
            </div>
          </div>
        </container>
      </nav>
    );
  }
}

export default Nav;
