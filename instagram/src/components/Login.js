import React from 'react'

export default function Login() {
  return (
    <div>

<form className='formlogin'>
        <img className='imginsta' src='https://www.instagram.com/static/images/web/logged_out_wordmark.png/7a252de00b20.png'/>
        <div className="mb-3">
          {/* <label className='labelinput'>Email </label> */}
          <input
            type="email"
            className="inputlogin"
            placeholder="Enter email"
          />
        </div>
        <div className="mb-3">
          {/* <label className='labelinput'>Password</label> */}
          <input
          className="inputlogin"
            type="password"
            // className="form-control"
            placeholder="Enter password"
          />
        </div>
        <div className="mb-3">
          <div className="custom-control custom-checkbox">
            <input
              type="checkbox"
              className="custom-control-input"
              id="customCheck1"
            />
            <label className="custom-control-label" htmlFor="customCheck1">
              Remember me
            </label>
          </div>
        </div>
        <div className="d-grid">
          <button type="submit" className="btnlogin">
            Login
          </button>
        </div>
        
        <div class="s311c t7mNY "></div>
        <div class="_0tv-g">or</div>
        {/* <div class="s311c t7mNY "></div> */}
        
        <p className="forgot-password text-right">
          Forgot <a href="#">password?</a>
        </p>
        
      </form>
        <form className='formregister'>
        <p className="forgot-password text-right">
        Don't have an account? <a href="#">Sign up?</a>
        </p>
        
        </form>
    </div>
  )
}
