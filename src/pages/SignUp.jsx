import React from 'react';
import './SignUp.css'

export default function SignUp() {
  return (
    <div className="container">
      <div className="form-container">
        <div className="image-container">
            <img src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png" alt="Instagram logo" />
        </div>
        <p className="sign_text">Sign up to see photos and videos from your friends</p>
        <form>  
          <input type="text" placeholder="Mobile Number or Email" />
          <input type="text" placeholder="Full Name" />
          <input type="text" placeholder="Username" />
          <input type="password" placeholder="Password"/>
          <p className='sign_text'>People who use our service may have uploaded your contact information to Instagram. <a href="www.instagram.com">Learn More</a>
</p>
          <p className='sign_text'>By signing up, you agree to our Terms , Privacy Policy and Cookies Policy .</p>
          <button className="login-button">Sign Up</button>
        </form>
      </div>
    </div>
  )
}
