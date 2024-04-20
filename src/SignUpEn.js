import React, { useState } from 'react';
import GoogleButton from "./GoogleButton";
import { useNavigate } from 'react-router-dom';
import { registerUser } from './UserPool'; // Ensure this path is correct and UserPool.js is configured properly

export default function SignupEN() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }
    // Assuming registerUser is properly implemented
    registerUser(email, password, [], 
      (result) => {
          console.log("Registration successful", result);
          navigate('/login'); // Adjust this as necessary
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
          placeholder="Email" 
          className="emailBox" 
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        /><br /><br />
        <input 
          type="password" 
          placeholder="Create password" 
          className="emailBox" 
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        /><br /><br />
        <input 
          type="password" 
          placeholder="Confirm password" 
          className="emailBox" 
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

