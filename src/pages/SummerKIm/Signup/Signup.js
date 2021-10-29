import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
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

  inpitUserInfo = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  submitUserSignup = e => {
    e.preventDefault();
    const { userId, userPw } = this.state;
    fetch('https://westagram-signup.herokuapp.com/signup', {
      method: 'POST',
      body: JSON.stringify({
        email: userId,
        password: userPw,
      }),
    })
      .then(response => response.json())
      .then(result => console.log('결과: ', result));
    alert('회원가입 완료.');
    this.props.history.push('/');
  };

  render() {
    const { userId, userName, userAddress, userPhone, userPwCheck, userPw } =
      this.state;

    let EmailregExp =
      /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;
    let AddressregExp =
      /(([가-힣A-Za-z·\d~\-\.]{2,}(로|길).[\d]+)|([가-힣A-Za-z·\d~\-\.]+(읍|동)\s)[\d]+)/;
    let PhoneregExp = /^\d{3}-\d{3,4}-\d{4}$/;

    const idValid = userId.match(EmailregExp) != null;
    const nameValid = userName;
    const addressValid = userAddress.match(AddressregExp) != null;
    const phoneValid = userAddress.match(PhoneregExp) != null;
    const pwValid = userPw.length > 5;

    return (
      <div className="signup">
        <div className="container">
          <span id="westagram">westagram</span>
          <form action="#" className="inputWrap">
            <input
              type="text"
              className={`id ${idValid ? '' : 'colorRed'}`}
              placeholder="이메일"
              name="userId"
              onChange={this.inpitUserInfo}
              value={userId}
            />
            <input
              type="text"
              className={`name ${nameValid ? '' : 'colorRed'}`}
              placeholder="사용자 이름"
              name="userName"
              onChange={this.inpitUserInfo}
              value={userName}
            />
            <input
              type="text"
              className={`address ${addressValid ? '' : 'colorRed'}`}
              placeholder="주소"
              name="userAddress"
              onChange={this.inpitUserInfo}
              value={userAddress}
            />
            <input
              type="text"
              className={`phone ${phoneValid ? '' : 'colorRed'}`}
              placeholder="핸드폰번호"
              name="userPhone"
              onChange={this.inpitUserInfo}
              value={userPhone}
            />
            <input
              type="password"
              className={`pw ${pwValid ? '' : 'colorRed'}`}
              placeholder="비밀번호"
              name="userPw"
              value={userPw}
              onChange={this.inpitUserInfo}
            />
            <input
              type="password"
              className={`pw ${pwValid ? '' : 'colorRed'}`}
              placeholder="비밀번호"
              name="userPwCheck"
              value={userPwCheck}
              onChange={this.inpitUserInfo}
            />
            <button
              id="loginBtn"
              className={`loginBtn ${!(idValid && pwValid) ? '' : 'activate'}`}
              onClick={this.handleOnClick}
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

export default withRouter(Signup);
