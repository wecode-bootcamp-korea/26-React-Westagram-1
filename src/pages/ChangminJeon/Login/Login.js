import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Login.scss';

class Login extends Component {
  constructor() {
    super();

    this.state = {
      IdValue: '',
      PwValue: '',
      opacity: false,
      disabled: true,
    };
  }
  handleIdInput = event => {
    this.setState(
      {
        IdValue: event.target.value,
      }
      // this.opacityChange
    );
  };
  handlePwInput = event => {
    this.setState(
      {
        PwValue: event.target.value,
      }
      // this.opacityChange
    );
  };
  opacityChange = () => {
    this.state.IdValue.indexOf('@') !== -1 && this.state.PwValue.length > 4
      ? this.setState({ opacity: 1, disabled: false })
      : this.setState({ opacity: 0.5, disabled: true });
  };
  render() {
    return (
      <div className="loginContainer">
        <div className="container">
          <p>{this.state.IdValue}</p>
          <p>IdLength: {this.state.IdValue.length}</p>
          <p>PwLength: {this.state.PwValue.length}</p>
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
                type="submit"
                style={{
                  opacity:
                    this.state.PwValue.length > 4 &&
                    this.state.IdValue.indexOf('@') !== -1
                      ? 1
                      : 0.5,
                }}
                disabled={this.state.disabled}
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
