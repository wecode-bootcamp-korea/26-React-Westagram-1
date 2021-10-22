import { getAllByPlaceholderText } from '@testing-library/dom';
import React, { Component } from 'react';
import './Login.scss';

export class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userId: '',
      userPw: '',
      opacity: false,
      type: 'password',
      color: true,
    };
    this.userIdRef = React.createRef();
    this.userPwRef = React.createRef();
    this.buttonRef = React.createRef();
  }

  handleIdInput = e => {
    this.setState({ userId: e.target.value });
    console.log(this.state.userId);
  };

  handlePwInput = e => {
    if (!this.state.userId.includes('@')) {
      // 아이디를 이메일 형식으로 썼는지 확인
      this.userIdRef.current.value = '이메일 형식으로 입력해주세요';
      this.userIdRef.current.style.color = 'red'; // FIXME: red로 바꾼 값 원상복귀
    } else {
      this.setState({ userPw: e.target.value, opacity: true });
      console.log(this.state.userPw.length);
    }
  };
  handleOnClick = () => {
    if (this.state.userPw.length < 5) {
      this.userPwRef.current.type = 'text'; // type 값 변경해서 메세지 뜰 수 있게
      this.userPwRef.current.value = '비밀번호를 5자 이상 입력하세요';
      this.userPwRef.current.style.color = 'red'; // FIXME: red로 바꾼 값 원상복귀
      return;
    }
    if (this.state.userId.length > 1 && this.state.userPw.length > 1) {
      alert('로그인 되었습니다.');
    }
  };

  render() {
    return (
      <main className="main">
        <div className="container">
          <span id="westagram">westagram</span>
          <form action="#" className="inputWrap">
            <input
              type="text"
              id="id"
              placeholder="전화번호, 사용자 이름 또는 이메일"
              onChange={this.handleIdInput}
              ref={this.userIdRef}
              style={{ color: this.state.color ? 'black' : 'red' }}
            />
            <input
              type={this.state.type}
              id="pw"
              placeholder="비밀번호"
              onChange={this.handlePwInput}
              ref={this.userPwRef}
              style={{ color: this.state.color ? 'black' : 'red' }}
            />
            <button
              id="loginBtn"
              onClick={this.handleOnClick}
              ref={this.buttonRef}
              style={{
                opacity: this.state.opacity ? '1' : '0.4',
                disabled: this.state.disabled ? 'disabled' : 'abled',
              }}
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
