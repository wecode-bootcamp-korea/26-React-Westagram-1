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
    console.log(e);
    this.setState({ [e.target.name]: e.target.value });
    // FIXME: 정규표현식 사용
  };

  handleOnClick = () => {
    if (this.state.userId.length > 1 && this.state.userPw.length > 1) {
      alert('로그인 되었습니다.');
    }
  };

  render() {
    const idVar = this.state.userId.includes('@');
    const pwVar = this.state.userPw.length > 5;

    return (
      <main className="main">
        <div className="container">
          <span id="westagram">westagram</span>
          <form action="#" className="inputWrap">
            <input // FIXME: email 정규 표현식 사용
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
              disabled={!idVar && pwVar}
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
