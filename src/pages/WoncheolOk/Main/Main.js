import React, { Component } from 'react';
// import Nav from "../../components/Nav/Nav";
import Feeds from './Components/Feeds';
import MainRight from './Components/MainRight';
import './Main.scss';
import '../../../styles/common.scss';

class Main extends Component {
  render() {
    return (
      <div className="main">
        {/* <Nav /> */}
        <main>
          <Feeds />
          <MainRight />
        </main>
      </div>
    );
  }
}

export default Main;
