import React, { useState } from 'react';
import GoogleButton from "./GoogleButton";
import { useNavigate } from 'react-router-dom';
import { registerUser } from './UserPool'; // Import the registration function from UserPool

export default function SignupEN() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  // Style adjustments should generally be avoided in React components directly unless necessary for dynamic changes.
  document.body.style.display = 'flex';
  document.body.style.backgroundColor = "#0b3050";
  document.body.style.paddingTop = "50px";

  const handleSubmit = (event) => {
    event.preventDefault();

    // Check if passwords match
    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    // Use registerUser function from UserPool.js
    registerUser(email, password, [], 
      (result) => {
          console.log("Registration successful", result);
          // Redirect user to another route or perform further actions
          navigate('/login'); // Example: navigate to login page after successful signup
      }, 
      (err) => {
          console.error("Registration failed", err);
          setError(err.message || 'Failed to register');
      }
    );
  };

  return (
    <div className="custom-container text-center bg-whiter">
      <form onSubmit={handleSubmit}>
        <div className="header">Sign up</div>
        <input 
          type="email" 
          id="email" 
          name="email" 
          placeholder=" email" 
          className="emailBox" 
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        /><br /><br />
        <input 
          type="password" 
          className="emailBox" 
          placeholder=" create password" 
          id="password1" 
          name="password" 
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        /><br /><br />
        <input 
          type="password" 
          className="emailBox" 
          placeholder=" confirm password" 
          id="password2" 
          name="confirmPassword" 
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          required
        /><br /><br />
        <input 
          type="submit" 
          value="Sign up" 
          className="logButton cursor-pointer bg-gradient-to-r from-cyan-500 to-blue-500"
        />
        <GoogleButton />
      </form>
      {error && <p className="error-message">{error}</p>}
    </div>
  );
}
