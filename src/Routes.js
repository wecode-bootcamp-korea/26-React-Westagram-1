import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Nav from './components/Nav/Nav';

// 보라's 컴포넌트
import LoginBora from './pages/BoraPark/Login/Login';
import MainBora from './pages/BoraPark/Main/Main';
// 창민's 컴포넌트
import LoginChangmin from './pages/ChangminJeon/Login/Login';
import MainChangmin from './pages/ChangminJeon/Main/Main';
// 여름's 컴포넌트
import LoginSummer from './pages/SummerKim/Login/Login';
import MainSummer from './pages/SummerKim/Main/Main';
// 원철's 컴포넌트
import LoginWoncheol from './pages/WoncheolOk/Login/Login';
import MainWoncheol from './pages/WoncheolOk/Main/Main';

export class Routes extends Component {
  render() {
    return (
      <Router>
        <Nav />
        <Switch>
          <Route exact path="/" component={LoginWoncheol} />
          <Route exact path="/main-WoncheolOK" component={MainWoncheol} />
          <Route exact path="/Login-BoraPark" component={LoginBora} />
          <Route exact path="/main-BoraPark" component={MainBora} />
          <Route exact path="/Login-ChangminJeon" component={LoginChangmin} />
          <Route exact path="/main-ChangminJeon" component={MainChangmin} />
          <Route exact path="/Login-SummerKim" component={LoginSummer} />
          <Route exact path="/main-SummerKim" component={MainSummer} />
        </Switch>
      </Router>
    );
  }
}

export default Routes;
