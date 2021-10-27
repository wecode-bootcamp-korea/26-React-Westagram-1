import React, { Component } from 'react';

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

export default Profile;
