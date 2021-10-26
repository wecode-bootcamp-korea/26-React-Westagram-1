import React, { Component } from 'react';
import { withRouter } from 'react-router';
import '../../../styles/reset.scss';
import '../../../styles/common.scss';
import './Login.scss';

class Login extends Component {
  constructor() {
    super();
    this.state = {
      username: '',
      password: '',
    };
  }

  handledInput = e => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  btnClick = () => {
    this.setState({
      username: '',
      password: '',
    });
    this.props.history.push('/main-woncheolok');
  };

  inputKeyPress = e => {
    if (
      e.key === 'Enter' &&
      this.state.username.length > 0 &&
      this.state.password > 0
    ) {
      this.btnClick();
    }
  };

  render() {
    return (
      <div className="login">
        <main className="wrapper">
          <div className="login-box">
            <header className="logo">Westagram</header>
            <form action="" id="loginForm">
              <input
                type="text"
                name="username"
                id="username"
                placeholder="전화번호, 사용자 이름 또는 이메일"
                value={this.state.username}
                onChange={this.handledInput}
                onKeyPress={this.inputKeyPress}
              />
              <input
                type="password"
                name="password"
                id="password"
                placeholder="비밀번호"
                value={this.state.password}
                onChange={this.handledInput}
                onKeyPress={this.inputKeyPress}
              />
              <button
                id="loginBtn"
                onClick={this.btnClick}
                disabled={
                  this.state.username.indexOf('@') !== -1 &&
                  this.state.password.length >= 5
                    ? false
                    : true
                }
              >
                로그인
              </button>
            </form>
            <section className="whenLostPw">
              <a href="/"> 비밀번호를 잊으셨나요? </a>
            </section>
          </div>
        </main>
      </div>
    );
  }
}

export default withRouter(Login);
