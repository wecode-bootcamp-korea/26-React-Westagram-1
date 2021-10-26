import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Login.scss';

class Login extends Component {
  constructor() {
    super();

    this.state = {
      IdValue: '',
      PwValue: '',
      disabled: true,
    };
  }
  handleIdInput = event => {
    this.setState({
      IdValue: event.target.value,
    });
  };
  handlePwInput = event => {
    this.setState({
      PwValue: event.target.value,
    });
  };
  render() {
    const { IdValue, PwValue, disabled } = this.state;
    return (
      <div className="loginContainer">
        <div className="container">
          <header>Instagram</header>
          <form className="inputContainer">
            <input
              className="inputId"
              type="text"
              placeholder="전화번호, 사용자 이름 또는 이메일"
              onChange={this.handleIdInput}
            />
            <input
              className="inputPw"
              type="password"
              placeholder="비밀번호"
              onChange={this.handlePwInput}
            />
          </form>
          <div className="loginButton">
            <Link to="/main-ChangminJeon">
              <button
                className={
                  PwValue.length > 4 && IdValue.indexOf('@') !== -1
                    ? 'activated'
                    : 'deactivated'
                }
                type="submit"
                disabled={disabled}
              >
                로그인
              </button>
            </Link>
          </div>
          <footer>
            <a href="www.naver.com">비밀번호를 잊으셨나요?</a>
          </footer>
        </div>
      </div>
    );
  }
}

export default Login;
