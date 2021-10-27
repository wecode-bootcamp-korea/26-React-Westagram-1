import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Login.scss';

class Login extends Component {
  constructor() {
    super();

    this.state = {
      IdValue: '',
      PwValue: '',
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
    const { IdValue, PwValue } = this.state;
    const validation = PwValue.length > 4 && IdValue.indexOf('@') !== -1;
    return (
      <div className="loginContainer">
        <div className="container">
          <header className="LoginHeader">Instagram</header>
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
                id="loginPageButton"
                style={{
                  opacity: validation ? 1 : 0.5,
                }}
                type="submit"
                disabled={validation ? false : true}
              >
                로그인
              </button>
            </Link>
          </div>
          <footer>
            <a className="LoginFooter" href="www.naver.com">
              비밀번호를 잊으셨나요?
            </a>
          </footer>
        </div>
      </div>
    );
  }
}

export default Login;
