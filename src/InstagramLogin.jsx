import React from 'react';
import './InstagramLogin.css';

function InstagramLogin() {
  return (
    <div className="container">
      <div className="form-container">
        <div className="image-container">
            <img src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png" alt="Instagram logo" />
        </div>
        <form>
          <input type="text" placeholder="Phone number, username, or email" />
          <input type="password" placeholder="Password" />
          <button className="login-button">Log In</button>
          <div className="divider">
            <div className="line"></div>
            <div className="text">OR</div>
            <div className="line"></div>
          </div>
          <button className="signup-button">Sign Up</button>
          <div className="links">
            <a href="#">Forgot password?</a>
            <a href="#">Switch accounts</a>
          </div>
        </form>
      </div>
    </div>
  );
}

export default InstagramLogin;
