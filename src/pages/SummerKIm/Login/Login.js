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

  inpitUserInfo = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  submitUserLogin = e => {
    e.preventDefault();
    const { userId, userPw } = this.state;
    fetch('https://westagram-signup.herokuapp.com/login ', {
      method: 'POST',
      body: JSON.stringify({
        email: userId,
        password: userPw,
      }),
    })
      .then(response => response.json())
      .then(response => {
        if (response.token) {
          localStorage.setItem('wtw-token', response.token);
          console.log('wtw-token', response.token);
        }
      });
    alert('로그인 되었습니다!');
    // this.props.history.push('/main-SummerKim');
    // alert('로그인 정보를 정확하게 입력해주세요');
  };

  render() {
    const { userId, userPw } = this.state;

    let EmailregExp =
      /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;

    const idValid = userId.match(EmailregExp) != null;
    const pwValid = userPw.length > 5;
    const loginVar = idValid && pwValid;

    return (
      <div className="login">
        <div className="container">
          <span className="westagram">westagram</span>
          <form action="#" className="inputWrap">
            <input
              className={`inputInfo ${idValid ? '' : 'colorRed'}`}
              type="text"
              placeholder="이메일"
              name="userId"
              value={userId}
              onChange={this.inpitUserInfo}
            />
            <input
              type="password"
              className={`inputInfo ${pwValid ? '' : 'colorRed'}`}
              placeholder="비밀번호"
              name="userPw"
              value={userPw}
              onChange={this.inpitUserInfo}
            />
            <button
              type="button"
              className={`loginBtn ${!loginVar ? '' : 'activate'}`}
              disabled={!loginVar ? true : false}
              onClick={this.submitUserLogin}
            >
              로그인
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

export default withRouter(Login);
