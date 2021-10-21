import React, { Component } from 'react';

export class RecommendedUsers extends Component {
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
            <p className="otherUsername"> Franz </p>
          </a>
          <p className="whyRecommended"> Instagram 신규 가입 </p>
        </div>
      </div>
    );
  }
}

export default RecommendedUsers;
