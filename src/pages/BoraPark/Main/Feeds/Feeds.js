import { Component } from 'react';
import InnerFeed from './InnerFeed';

class Feeds extends Component {
  id = 3;

  state = {
    input: '',
    feeds: [],
    lists: [],
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
  handleChange = e => {
    this.setState({ input: e.target.value });
  };

  handleCreate = e => {
    const { input, lists } = this.state;
    this.setState({
      input: '',
      lists: lists.concat({
        id: this.id++,
        text: input,
      }),
    });
  };

  handleKeyPress = e => {
    if (e.key.code === 13) {
      this.handleCreate();
    }
  };

  handleRemove = id => {
    const { lists } = this.state;
    this.setState({
      lists: lists.filter(list => list.id !== id),
    });
  };

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
