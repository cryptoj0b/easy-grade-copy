import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import GoogleButton from "./GoogleButton";
import { CognitoUserPool, AuthenticationDetails, CognitoUser } from 'amazon-cognito-identity-js';

// Configuration for the Cognito User Pool
const poolData = {
    UserPoolId: 'eu-north-1_vyP0c3eU8',
    ClientId: '1mf5ato0bus8fk929eeau6rogf'
};

const userPool = new CognitoUserPool(poolData);

export default function LoginBox() {
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
                console.log('Access token:', result.getAccessToken().getJwtToken());
                navigate("/home"); // Navigate to home after successful login
            },
            onFailure: function(err) {
                alert(err.message || JSON.stringify(err));
            },
            newPasswordRequired: function(userAttributes, requiredAttributes) {
                console.log("User needs to set a new password.");
                // Remove attributes that the user should not be able to modify
                delete userAttributes.email_verified;

                // Redirect to set a new password page
                navigate("/new-password", { state: { user: cognitoUser, userAttributes: userAttributes } });
            }
        });
    }

    function handleSignUpClick() {
        navigate("/signup");
    }

    return (
        <div className="custom-container">
            <form id="myForm" className="bg-whiter rounded" onSubmit={handleLogin}>
                <div className="header">Login</div>
                <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Email"
                    className="emailBox"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                /><br/><br/>
                <input
                    type="password"
                    className="emailBox"
                    placeholder="Password"
                    id="password"
                    name="password"
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                /><br/><br/>
                <input
                    type="submit"
                    value="Login"
                    className="logButton cursor-pointer bg-gradient-to-r from-cyan-500 to-blue-500"
                /><br/>
                <a className="text-lighterBlue underline cursor-pointer" onClick={handleSignUpClick}>
                    don't have an account? sign up here!
                </a>
                <GoogleButton />
            </form>
        </div>
    );
}
