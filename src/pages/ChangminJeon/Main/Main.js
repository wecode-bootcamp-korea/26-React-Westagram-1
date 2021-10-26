import React, { Component } from 'react';
import './Main.scss';
import MainRight from './MainRight';
import Feed from './Feed';
class Main extends Component {
  constructor() {
    super();
    this.state = {
      id: 0,
      input: '',
      commentBox: [],
    };
  }

  componentDidMount() {
    fetch('http://localhost:3000/data/commentData.json', {
      method: 'GET', // GET method는 기본값이라서 생략이 가능합니다.
    }) // 예시코드에서는 이해를 돕기 위해 명시적으로 기입해뒀습니다.
      .then(res => res.json())
      .then(data => {
        this.setState({
          commentBox: data,
        });
      });
  }

  onInputChange = e => {
    this.setState({
      input: e.target.value,
    });
  };

  commentUpdate = event => {
    const { commentBox, input, id } = this.state;
    if (event.key === 'Enter' && input.length > 0) {
      const newCommentBox = commentBox.concat({ id: id, content: input });
      this.updateComment(newCommentBox, id);
    }
  };

  clickUpdate = () => {
    const { commentBox, input, id } = this.state;
    if (input.length > 0) {
      const newCommentBox = commentBox.concat({ id: id, content: input });
      this.updateComment(newCommentBox, id);
    }
  };

  updateComment = (newCommentBox, id) => {
    this.setState({
      id: id + 1,
      commentBox: newCommentBox,
      input: '',
    });
  };
  render() {
    const { input, commentBox } = this.state;
    const { commentUpdate, onInputChange, clickUpdate } = this;
    return (
      <div className="mainContainer">
        <div className="main">
          <div className="feeds">
            <Feed
              input={input}
              commentBox={commentBox}
              commentUpdate={commentUpdate}
              onInputChange={onInputChange}
              clickUpdate={clickUpdate}
            />
          </div>
          <MainRight />
        </div>
      </div>
    );
  }
}

export default Main;
