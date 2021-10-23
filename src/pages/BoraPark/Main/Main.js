import { Component } from 'react';

import Feeds from '../../BoraPark/Main/Feeds/Feeds';
import Aside from '../../BoraPark/Main/Aside/Aside';
import './Main.scss';

class Main extends Component {
  render() {
    return (
      <>
        {/* <Nav /> */}
        <main id="feed">
          <Feeds />
          <Aside />
        </main>
      </>
    );
  }
}

export default Main;
