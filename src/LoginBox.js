import React, {useState, useEffect} from "react"
import { BrowserRouter as Router, Route, Link, Routes, useNavigate } from 'react-router-dom';
import GoogleButton from "./GoogleButton";
export default function LoginBox (){

  document.body.style.display = 'flex';
  const navigate = useNavigate();
  

  function handleSignUpClick(){
    navigate("/signup")
  }
  /* function to go to Home page after logging in successfully:
  function handleHomeClick(){
      navigate("/home")
    }
  (please ensure they are authenticated before using this)

  you may use the function in the login button as such: onClick = {handleHomeClick} and it will work!
  */
    return (
        <div>
        <div className="custom-container">
        <form  id="myForm" className ="bg-whiter rounded"method="post">
          <div className="header">Login</div> {/* the big login word */}
          {/* use this to take email, check the name */}
          <input type="email" id="email" name="email" placeholder=" email" className="emailBox" /><br/><br/> 
          {/* use this to take password, also check the name */}
          <input type="password" className="emailBox" placeholder=" password" id="password" name="password"/><br/><br/>
          {/* the submit button, also add the method and action when ready to take the other 2 into the database! */}
          <input type="submit" value="Login" className="logButton cursor-pointer bg-gradient-to-r from-cyan-500 to-blue-500" /><br/>
          <a className="text-lighterBlue underline cursor-pointer" onClick={handleSignUpClick}>don't have an account? sign up here!</a>
          {/* this is the google button being used only, check it in its own file GoogleButton.js to make sure it goes to authentication */}
          <GoogleButton/>
        </form>
      </div>
      </div>
    )
}