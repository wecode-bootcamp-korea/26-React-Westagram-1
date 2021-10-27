import React, { Component } from 'react';

class ChtFrm extends Component {
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

  render() {
    // const { value, onChange, onCreate, onKeyPress } = this.props;
    const { value, lists } = this.props;
    const { handleChange, handleKeyPress, handleCreate } = this;

    return (
      <form className="chatFrm">
        <input
          value={value}
          onChange={handleChange}
          onKeyPress={handleKeyPress}
          type="text"
          className="chatBox"
          placeholder="댓글 달기..."
        />

        <button
          onClick={e => {
            e.preventDefault();
            handleCreate();
          }}
          type="submit"
          className="uploadBtn"
        >
          게시
        </button>
      </form>
    );
  }
}

export default ChtFrm;
