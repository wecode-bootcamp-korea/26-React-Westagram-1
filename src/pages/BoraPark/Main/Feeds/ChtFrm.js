import React, { Component } from 'react';

class ChtFrm extends Component {
  render() {
    const { value, onChange, onCreate, onKeyPress } = this.props;

    return (
      <form className="chatFrm">
        <input
          value={value}
          onChange={onChange}
          onKeyPress={onKeyPress}
          type="text"
          className="chatBox"
          placeholder="댓글 달기..."
        />

        <button
          onClick={e => {
            e.preventDefault();
            onCreate();
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
