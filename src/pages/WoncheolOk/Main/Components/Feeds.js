import React, { Component } from 'react';
import Reply from './Reply';

export class Feeds extends Component {
  render() {
    return (
      <div className="feeds">
        <article>
          <header className="headerBox">
            <a href="/main-woncheolok">
              <img
                src="/images/WoncheolOk/default_user_profile.png"
                alt="default profile"
                className="profileImg_normal"
              />
            </a>
            <a href="/main" className="username">
              Johan_Liebert
            </a>
            <a href="/main" className="moreBtn">
              <i className="uil uil-ellipsis-h" />
            </a>
          </header>

          <img
            src="https://images.unsplash.com/photo-1546425934-1d838d0df3ac?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1664&q=80"
            alt="Dusseldorf"
          />

          <div className="articleIconsBox">
            <a href="/main-woncheolok">
              <i className="uil uil-heart articleIcons" />
            </a>
            <a href="/main-woncheolok">
              <i className="uil uil-comment articleIcons" />
            </a>
            <a href="/main-woncheolok">
              <i className="uil uil-upload articleIcons" />
            </a>
            <a href="/main-woncheolok">
              <i className="uil uil-bookmark articleIcons" />
            </a>
          </div>

          <div className="likes">
            <a href="/main-woncheolok">
              <img
                src="/images/WoncheolOK/default_user_profile.png"
                alt="default profile"
                className="profileImg_small"
              />
            </a>
            <p className="howManyLikes">
              <a href="/main-woncheolok">
                <span className="bold">Doctor_Tenma</span>
              </a>{' '}
              님 외&nbsp;
              <a href="/main-woncheolok">
                <span className="bold"> 3명</span>
              </a>
              이 좋아합니다.
            </p>
          </div>

          <div className="imgDescription">
            <a href="/main" className="inline">
              <span className="bold">Johan_Liebert</span>
            </a>{' '}
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus
            assumenda eligendi dolores? Maiores deleniti molestias aliquid modi
            odio sed magni veritatis nesciunt. Debitis doloribus deserunt eos
            dicta. Consequatur, eveniet? Eveniet.
          </div>
        </article>
        <Reply />
      </div>
    );
  }
}

export default Feeds;
