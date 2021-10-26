import React, { Component } from 'react';
import './Login.scss';

export class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userId: '',
      userPw: '',
    };
  }

  handleInput = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleOnClick = e => {
    e.preventDefault();
    alert('로그인 되었습니다.');
  };

  render() {
    let regExp =
      /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i; // 정규 표현식
    const idVar = this.state.userId.match(regExp) != null; // 입력값이 정규표현식에 일치하는지
    const pwVar = this.state.userPw.length > 5 && idVar; // FIXME: id pw 모두 입력해야 로그인 알림창 뜨도록

    return (
      <main className="main">
        <div className="container">
          <span id="westagram">westagram</span>
          <form action="#" className="inputWrap">
            <input
              type="text"
              id="id"
              placeholder="전화번호, 사용자 이름 또는 이메일"
              name="userId"
              onChange={this.handleInput}
              value={this.state.userId}
              style={{ color: idVar ? 'black' : 'red' }}
            />
            <input
              id="pw"
              type="password"
              placeholder="비밀번호"
              name="userPw"
              value={this.state.userPw}
              onChange={this.handleInput}
              style={{ color: pwVar ? 'black' : 'red' }}
            />
            <button
              id="loginBtn"
              onClick={this.handleOnClick}
              style={{
                opacity: idVar && pwVar ? '1' : '0.4',
              }}
              disabled={!idVar && !pwVar}
            >
              로그인
            </button>
          </form>
          <a href="#" id="forgotPw">
            비밀번호를 잊으셨나요?
          </a>
          {/* <Link to="/main">메인으로 바로가기</Link> */}
        </div>
      </main>
    );
  }
}

export default Login;
