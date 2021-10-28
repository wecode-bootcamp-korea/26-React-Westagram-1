import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
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
    fetch('https://westagram-signup.herokuapp.com/login ', {
      method: 'POST',
      body: JSON.stringify({
        email: this.state.userId,
        password: this.state.userPw,
      }),
    })
      .then(response => response.json())
      .then(response => {
        if (response.access_token) {
          localStorage.setItem('wtw-token', response.access_token);
          console.log('wtw-token', response.access_token);
          alert('로그인 되었습니다!');
        }
      });
    this.props.history.push('/main-SummerKim');
  };

  render() {
    const { userId, userPw } = this.state;
    let regExp =
      /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;
    const idVar = this.state.userId.match(regExp) != null;
    const pwVar = this.state.userPw.length > 5;
    const loginVar =
      this.state.userId.match(regExp) != null && this.state.userPw.length > 5;

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
              value={userId}
              style={{ color: idVar ? 'black' : 'red' }}
            />
            <input
              id="pw"
              type="password"
              placeholder="비밀번호"
              name="userPw"
              value={userPw}
              onChange={this.handleInput}
              style={{ color: pwVar ? 'black' : 'red' }}
            />
            <button
              id="loginBtn"
              onClick={this.handleOnClick}
              style={{
                opacity: loginVar ? '1' : '0.4',
              }}
              disabled={!loginVar}
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

export default withRouter(Login);
