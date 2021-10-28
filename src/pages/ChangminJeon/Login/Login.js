import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

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

  goToMain = () => {
    this.props.history.push('/main-ChangminJeon');
  };
  // goToMain = () => {
  //   // this.props.history.push('/main-ChangminJeon');
  //   fetch('http://10.58.1.234:8000/jbj/login', {
  //     method: 'POST',
  //     body: JSON.stringify({
  //       email: this.state.IdValue,
  //       password: this.state.PwValue,
  //     }),
  //     // GET method는 기본값이라서 생략이 가능합니다.
  //   }) // 예시코드에서는 이해를 돕기 위해 명시적으로 기입해뒀습니다.
  //     .then(response => response.json())
  //     .then(result => {
  //       if (result.message === 'INVALID_USER') {
  //         console.log(result);
  //         alert('실패!!!');
  //       } else {
  //         this.props.history.push('/main-ChangminJeon');
  //       }
  //     });
  // };
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
            <button
              onClick={this.goToMain}
              style={{
                opacity: validation ? 1 : 0.5,
                cursor: validation ? 'pointer' : 'default',
              }}
              type="button"
              disabled={validation ? false : true}
            >
              로그인
            </button>
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

export default withRouter(Login);
