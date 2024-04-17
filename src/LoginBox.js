import React, {useState, useEffect} from "react"
import { BrowserRouter as Router, Route, Link, Routes, useNavigate } from 'react-router-dom';
import GoogleButton from "./GoogleButton";
import { CognitoUserPool, AuthenticationDetails, CognitoUser } from 'amazon-cognito-identity-js';
import NewPassword from "./NewPassword";

// Configuration for the Cognito User Pool
const poolData = {
    UserPoolId: 'eu-north-1_vyP0c3eU8',
    ClientId: '1mf5ato0bus8fk929eeau6rogf'
};

const userPool = new CognitoUserPool(poolData);

export default function LoginBox (){

  document.body.style.display = 'flex';
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');


   // Authenticate user and navigate to home on success
   function handleLogin(event) {
    event.preventDefault();
    const userData = {
      Username: email,
      Pool: userPool
    };
    const cognitoUser = new CognitoUser(userData);
    const authenticationData = {
      Username: email,
      Password: password,
    };
    const authenticationDetails = new AuthenticationDetails(authenticationData);
    cognitoUser.authenticateUser(authenticationDetails, {
      onSuccess: function (result) {
        console.log('access token: ' + result.getAccessToken().getJwtToken());
        navigate("/home"); // navigate to home after successful login
      },
      onFailure: function(err) {
        alert(err.message || JSON.stringify(err));
      }
    });
  }

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
        <form  id="myForm" className ="bg-whiter rounded"method="post" onSubmit={handleLogin}>
          <div className="header">Login</div> {/* the big login word */}
          {/* use this to take email, check the name */}
          <input type="email" id="email" name="email" placeholder=" email" className="emailBox"  onChange={e => setEmail(e.target.value)}/><br/><br/> 
          {/* use this to take password, also check the name */}
          <input type="password" className="emailBox" placeholder=" password" id="password" name="password" value={password} onChange={e => setPassword(e.target.value)}/><br/><br/>
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