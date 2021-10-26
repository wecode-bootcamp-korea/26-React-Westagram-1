import React, { Component } from 'react';
import Feeds from './Components/Feeds';
import MainRight from './Components/MainRight';
import './Main.scss';

class Main extends Component {
  render() {
    return (
      <div className="main">
        <main>
          <Feeds />
          <MainRight />
        </main>
      </div>
    );
  }
}

export default Main;
