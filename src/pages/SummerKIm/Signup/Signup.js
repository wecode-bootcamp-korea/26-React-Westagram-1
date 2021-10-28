import React, { Component } from 'react';
import './Signup.scss';

export class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userId: '',
      userName: '',
      userAddress: '',
      userPhone: '',
      userPw: '',
      userPwCheck: '',
    };
  }

  handleInput = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleOnClick = e => {
    e.preventDefault();
    fetch('https://westagram-signup.herokuapp.com/signup', {
      method: 'POST',
      body: JSON.stringify({
        email: this.state.userId,
        password: this.state.userPw,
      }),
    })
      .then(response => response.json())
      .then(result => console.log('결과: ', result));
    alert('회원가입 완료.');
    this.props.history.push('/');
  };

  // componentDidMount() {}

  render() {
    const { userId, userName, userAddress, userPhone, userPwCheck, userPw } =
      this.state;
    let regExpEmail =
      /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i; // 정규 표현식
    let regExpAddress =
      /(([가-힣A-Za-z·\d~\-\.]{2,}(로|길).[\d]+)|([가-힣A-Za-z·\d~\-\.]+(읍|동)\s)[\d]+)/;
    let regExpPhone = /^\d{3}-\d{3,4}-\d{4}$/;
    const idVar = this.state.userId.match(regExpEmail) != null; // 입력값이 정규표현식에 일치하는지
    const addressVar = this.state.userAddress.match(regExpAddress) != null; // 입력값이 정규표현식에 일치하는지
    const phoneVar = this.state.userAddress.match(regExpPhone) != null; // 입력값이 정규표현식에 일치하는지
    const pwVar = this.state.userPw.length > 5 && idVar; // FIXME: id pw 모두 입력해야 로그인 알림창 뜨도록

    return (
      <div className="signup">
        <div className="container">
          <span id="westagram">westagram</span>
          <form action="#" className="inputWrap">
            <input
              type="text"
              id="id"
              placeholder="이메일"
              name="userId"
              onChange={this.handleInput}
              value={userId}
              style={{ color: idVar ? 'black' : 'red' }}
            />
            <input
              type="text"
              id="name"
              placeholder="사용자 이름"
              name="userName"
              onChange={this.handleInput}
              value={userName}
              style={{ color: idVar ? 'black' : 'red' }}
            />
            <input
              type="text"
              id="address"
              placeholder="주소"
              name="userAddress"
              onChange={this.handleInput}
              value={userAddress}
              style={{ color: addressVar ? 'black' : 'red' }}
            />
            <input
              type="text"
              id="phone"
              placeholder="핸드폰번호"
              name="userPhone"
              onChange={this.handleInput}
              value={userPhone}
              style={{ color: phoneVar ? 'black' : 'red' }}
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
            <input
              id="pw"
              type="password"
              placeholder="비밀번호"
              name="userPwCheck"
              value={userPwCheck}
              onChange={this.handleInput}
              style={{ color: pwVar ? 'black' : 'red' }}
            />
            <button
              id="loginBtn"
              onClick={this.handleOnClick}
              style={{
                opacity: idVar && pwVar ? '1' : '0.4',
              }}
              // disabled={!idVar && !pwVar}
            >
              회원가입
            </button>
          </form>
          <a href="#" id="forgotPw">
            비밀번호를 잊으셨나요?
          </a>
          {/* <Link to="/main">메인으로 바로가기</Link> */}
        </div>
      </div>
    );
  }
}

export default Signup;
