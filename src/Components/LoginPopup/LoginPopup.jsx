import React, { useState } from 'react'
import './LoginPopup.css'
import { assets } from '../../assets/assets'

const LoginPopup = ({ setShowLogin }) => {

  const [currState, setCurrState] = useState("Login")

  return (
    <div className='login-popup'>
      <form className="login-popup-container">
        <div className="login-popup-title">
          <h2>{currState}</h2>
          <img src={assets.cross_icon} onClick={() => { setShowLogin(false) }} alt="" />
        </div>
        <div className="login-popup-inputs">
          {currState==="Login"?<></>:<input type="text" placeholder="Email" required />}
          
          <input type="text" placeholder='Username' required />
          <input type="password" placeholder="Password" required />

        </div>
        <button >{currState === "Sign Up" ? "Create Account" : "Login"}</button>
        <div className="login-popup-condition">
          <input type="checkbox" required />
          <p>By continuing, I agree to the terms of use & privacy policy</p>
        </div>
        {currState==="Login"
        ?<p>Create new account? <span onClick={()=>{setCurrState("Sign up")}}>Click here</span></p>
        :<p>Already have an account <span  onClick={()=>{setCurrState("Login")}} >Login here</span></p>}
      </form>
    </div>
  )
}

export default LoginPopup
