import React, { Component } from 'react';
import Feed from './Feed/Feed';
import MainRight from './MainRight/MainRight';
import './Main.scss';

export class Main extends Component {
  render() {
    return (
      <section className="section">
        <Feed />
        <MainRight />
      </section>
    );
  }
}

export default Main;
