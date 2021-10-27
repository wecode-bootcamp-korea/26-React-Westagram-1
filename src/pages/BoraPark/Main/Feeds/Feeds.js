import { Component } from 'react';
import InnerFeed from './InnerFeed';

class Feeds extends Component {
  id = 3;

  state = {
    input: '',
    feeds: [],
  };
  componentDidMount() {
    fetch('http://localhost:3000/data/commentData.json', {
      method: 'GET',
    })
      .then(res => res.json())
      .then(res => {
        this.setState({
          feeds: res,
        });
      });
  }
  /* 여기 원래 함수들 자리 */
  render() {
    const { feeds } = this.state;
    // const { handleChange, handleCreate, handleKeyPress, handleRemove } = this;
    return (
      <div>
        {/* <Profile /> */}
        <InnerFeed feeds={feeds}>
          {/* <ChtList name={name} list={lists} onRemove={handleRemove} /> */}
        </InnerFeed>

        {/* <ChtFrm
          value={input}
          onChange={handleChange}
          onKeyPress={handleKeyPress}
          onCreate={handleCreate}
        /> */}
      </div>
    );
  }
}

export default Feeds;
