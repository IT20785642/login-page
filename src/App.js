import user from './image/user.png';
import email from './image/email.png';
import password from './image/password.png';
import './App.css';

function App() {
  return (
    <div className="main">
    <div className="form">
      <div>
        <div className="images">
          <div className="container-image">
            <img src={user} alt="user" className="user"/>

          </div>


        </div>
        <div>
          <h1>SIGN IN</h1>
          <div>
            <img src={email} alt="email" className="email"/>
            <input type="text" placeholder="User name or Email" className="name"/>
          </div>
          <div className="pwd-input">
            <img src={password} alt="password" className="email"/>
            <input type="password" placeholder="Password" className="name"/>
          </div>
         <div className="login-button">
         <button>Login</button>
         </div>
         <p className="link">
              <a href="#">Forgot password?</a>  Or  <a href="#">Sign Up</a>
            </p>

          </div>
         </div>
      </div>
    </div>
  );
}

export default App;
