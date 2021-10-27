import React, { Component } from 'react';
import ChtItem from './ChtItem';

class ChtList extends Component {
  render() {
    const { lists, onRemove } = this.props;

    const commentList = lists.map(({ id, text }) => (
      <ChtItem id={id} text={text} onRemove={onRemove} key={id} />
    ));
    return <div>{commentList}</div>;
  }
}

export default ChtList;
