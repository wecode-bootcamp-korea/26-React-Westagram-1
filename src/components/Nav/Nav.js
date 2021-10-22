import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import '../Nav/Nav.scss';

class Nav extends Component {
  render() {
    return (
      <header>
        {/* nav */}
        <nav>
          <div className="logo clearfix">
            <a href="#" className="logoImg">
              <img src="/images/BoraPark/logo.png" alt="Westagram logo" />
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
              <img src="/images/BoraPark/ico_explore.png" alt="explore" />
            </a>
            <a href="#">
              <img src="/images/BoraPark/ico_heart.png" alt="heart" />
            </a>
            <a href="#">
              <img src="/images/BoraPark/ico_profile.png" alt="profile" />
            </a>
          </div>
        </nav>
      </header>
    );
  }
}
export default withRouter(Nav);
