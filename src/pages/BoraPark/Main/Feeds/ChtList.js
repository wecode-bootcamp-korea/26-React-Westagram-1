import React, { Component } from 'react';
import ChtItem from './ChtItem';

//map함수 구현
class ChtList extends Component {
  render() {
    const { lists, onRemove } = this.props;

    const listArr = lists.map(({ id, text }) => (
      <ChtItem id={id} text={text} onRemove={onRemove} key={id} />
    ));
    return <div>{listArr}</div>;
  }
}

export default ChtList;
