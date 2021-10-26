import React, { Component } from 'react';
import { withRouter } from 'react-router';
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
    const { history } = this.props;
    this.setState({
      username: '',
      password: '',
    });
    history.push('/main-woncheolok');
  };

  inputKeyPress = e => {
    const { username, password } = this.state;
    if (e.key === 'Enter' && username.length && password.length) {
      this.btnClick();
    }
  };

  render() {
    const { username, password } = this.state;
    const { handledInput, inputKeyPress, btnClick } = this;

    return (
      <div className="login">
        <main className="wrapper">
          <div className="login-box">
            <header className="logo">Westagram</header>
            <form action="#" id="loginForm">
              <input
                type="text"
                name="username"
                id="username"
                placeholder="전화번호, 사용자 이름 또는 이메일"
                value={username}
                onChange={handledInput}
                onKeyPress={inputKeyPress}
              />
              <input
                type="password"
                name="password"
                id="password"
                placeholder="비밀번호"
                value={password}
                onChange={handledInput}
                onKeyPress={inputKeyPress}
              />
              <button
                id="loginBtn"
                onClick={btnClick}
                disabled={
                  username.includes('@') && password.length >= 5 ? false : true
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
