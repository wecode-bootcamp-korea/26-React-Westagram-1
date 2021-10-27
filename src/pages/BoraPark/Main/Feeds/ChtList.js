import React, { Component } from 'react';
import ChtItem from './ChtItem';

class ChtList extends Component {
  handleRemove = id => {
    const { lists } = this.state;
    this.setState({
      lists: lists.filter(list => list.id !== id),
    });
  };
  render() {
    const { lists, name } = this.props;

    const commentList = lists.map(({ id, name, text }) => (
      <ChtItem
        id={id}
        name={name}
        text={text}
        onRemove={this.handleRemove}
        key={id}
      />
    ));
    return <div>{commentList}</div>;
  }
}

export default ChtList;
