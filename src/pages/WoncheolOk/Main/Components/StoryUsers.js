import React, { Component } from 'react';

export class StoryUsers extends Component {
  render() {
    return (
      <div className="otherUsers">
        <a href="/main-woncheolok">
          <img
            src="/images/WoncheolOK/default_user_profile.png"
            alt="default profile"
            className="profileImg_normal"
          />
        </a>
        <div className="nameTimeContainer">
          <a href="/main-woncheolok">
            <p className="otherUsername"> Anna </p>
          </a>
          <p className="storyPassedTime"> 15분전 </p>
        </div>
      </div>
    );
  }
}

export default StoryUsers;
