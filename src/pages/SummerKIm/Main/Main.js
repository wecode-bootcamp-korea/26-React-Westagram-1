import React, { Component } from 'react';
import Feed from './Feed/Feed';
import MainRight from './MainRight/MainRight';
import './Main.scss';

export class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      feedList: [],
    };
  }

  componentDidMount() {
    fetch('http://localhost:3000/data/feedData.json', {
      method: 'GET', // GET method는 기본값이라서 생략이 가능합니다.
    }) // 예시코드에서는 이해를 돕기 위해 명시적으로 기입해뒀습니다.
      .then(res => res.json())
      .then(data => {
        this.setState({
          feedList: data,
        });
      });
  }

  render() {
    const { feedList } = this.state;

    return (
      <section className="section">
        <div className="feeds">
          {feedList.map(feed => {
            return (
              <Feed
                key={feed.id}
                name={feed.userName}
                img={feed.pictur}
                content={feed.content}
                likeFeed={feed.isLikedFeed}
                likedUserName={feed.likedUserName}
                likedCount={feed.likedCount}
                commentList={feed.commentList}
              />
            );
          })}
        </div>
        <MainRight />
      </section>
    );
  }
}

export default Main;
