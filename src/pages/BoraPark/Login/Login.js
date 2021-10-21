import { Component } from 'react';
import { withRouter } from 'react-router-dom';
import './Login.scss';

class Login extends Component {
  matchValue = elem => {
    const id = document.getElementById('userId');
    const pw = document.getElementById('userPw');
    const btn = document.querySelector('button');
    if (!id.value || !pw.value) {
      btn.style.opacity = 0.4;
    } else {
      btn.style.opacity = 1;
    }
  };
  goToMain = () => {
    this.props.history.push('/main');
  };
  render() {
    return (
      <div id="wrapper">
        <h1 className="logo eng">
          <a href="#">Westagram</a>
        </h1>

        <form className="loginFrm">
          <input
            onChange={this.matchValue}
            type="text"
            id="userId"
            placeholder="전화번호, 사용자 이름 또는 이메일"
          />
          <input
            onChange={this.matchValue}
            type="password"
            id="userPw"
            placeholder="비밀번호"
          />
          <button onClick={this.goToMain} type="submit" className="loginBtn">
            로그인
          </button>
        </form>

        <p>비밀번호를 잊으셨나요?</p>
      </div>
    );
  }
}
export default Login;
