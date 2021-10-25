import { Component } from 'react';
import Profile from './Profile';
import InnerFeed from './InnerFeed';
import ChtFrm from './ChtFrm';
import ChtList from './ChtList';

class Feeds extends Component {
  id = 1;

  state = {
    input: '',
    lists: [
      { id: 0, text: 'dkei993 너무 재밌었겠다~~나중에 나랑도 연말파티하자~' },
    ],
  };

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
    const { input, lists } = this.state;
    const { handleChange, handleCreate, handleKeyPress, handleRemove } = this;
    return (
      <>
        <Profile />
        <InnerFeed>
          <ChtList lists={lists} onRemove={handleRemove} />
        </InnerFeed>
        <ChtFrm
          value={input}
          onChange={handleChange}
          onKeyPress={handleKeyPress}
          onCreate={handleCreate}
        />
      </>
    );
  }
}

export default Feeds;
