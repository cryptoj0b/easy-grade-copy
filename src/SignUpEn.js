import GoogleButton from "./GoogleButton";
import { BrowserRouter as Router, Route, Link, Routes, useNavigate } from 'react-router-dom';
export default function SignupEN (){

  document.body.style.display = 'flex';
  document.body.style.backgroundColor = "#0b3050";
  document.body.style.paddingTop = "50px";
    return (
      <div>
    <div className="custom-container text-center bg-whiter">
      <form method="post">
        <div className="header">Sign up</div>
        {/* use this to take email, check the name */}
        <input type="email" id="email" name="email" placeholder=" email" className="emailBox" /><br /><br />
        {/* use this to take password, also check the name */}
        <input type="password" className="emailBox" placeholder=" create password" id="password1" name="password" /><br /><br />
        <input type="password" className="emailBox" placeholder=" confirm password" id="password2" name="password" /><br /><br />
        {/* change the method and action and whatever you'd need */}
        <input type="submit" value="Sign up" className="logButton cursor-pointer bg-gradient-to-r from-cyan-500 to-blue-500" />
        {/* change GoogleButton.js NOT this one */}
        <GoogleButton/>
      </form>
    </div>
        </div>
    )
}