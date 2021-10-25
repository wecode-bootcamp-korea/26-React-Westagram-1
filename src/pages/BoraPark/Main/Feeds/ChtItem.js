import React, { Component } from 'react';

class ChtItem extends Component {
  render() {
    const { text, id, onRemove } = this.props;
    return (
      <div className="bottom-wrap">
        <p className="userId">wstory_2021</p>
        <p className="msg">{text}</p>

        <div
          className="remove"
          onClick={e => {
            onRemove(id);
          }}
        >
          &times;
        </div>
      </div>
    );
  }
}

export default ChtItem;
