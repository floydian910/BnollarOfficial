import React from 'react'
import './LoginPage.css'


function LoginPage() {
  return (
    <div className='login-page__wrapper'>
        <div className="login-page__content">
          <div className="login-page__logo">
            <img src={require('../../pictures/logo.png')} alt="logo" />
          </div>
          <div className="login-page__welcome">
            <h1>Welcome back</h1>
            <a href="#">Sign in to your account</a>
          </div>
          <form className="login-inputs__form">
            <div className="inputs">
            <input type="text"  placeholder='Username'/>
            <input type="password" placeholder='Password'/>
            </div>
         
            <div className="forgot-password">
              <a href="#">Forgot password</a>
           
            </div>

            <button>Sign in</button>
          </form>
        </div>

    </div>
  )
}

export default LoginPage