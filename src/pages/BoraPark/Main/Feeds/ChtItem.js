import React, { Component } from 'react';

class ChtItem extends Component {
  render() {
    const { name, text, id, onRemove } = this.props;
    return (
      <div className="bottom-wrap">
        <p className="userId">{name}</p>
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
