import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { completeNewPassword } from './UserPool';

function CreateNewPasswordEN() {
  const location = useLocation();
  const navigate = useNavigate();
  const user = location.state?.user;

  useEffect(() => {
    console.log("Received user object:", user);
  }, [user]);

  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!newPassword || newPassword !== confirmPassword) {
      setError("Passwords do not match or are empty.");
      return;
    }

    try {
      await completeNewPassword(user, newPassword);
      console.log("Password change successful!");
      navigate("/login"); // Adjust this as needed
    } catch (err) {
      setError(err.message);
      console.error("Failed to change password:", err);
    }
  };

  return (
    <div className="container">
      <h1>Set Your New Password</h1>
      {error && <p className="error">{error}</p>}
      <form onSubmit={handleSubmit}>
        <label>New Password:
          <input
            type="password"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            required
          />
        </label>
        <br />
        <label>Confirm New Password:
          <input
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
        </label>
        <br />
        <button type="submit">Change Password</button>
      </form>
    </div>
  );
}

export default CreateNewPasswordEN;
