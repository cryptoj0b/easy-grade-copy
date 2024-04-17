import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

function NewPassword() {
    const location = useLocation();
    const navigate = useNavigate();
    const user = location.state.user; // Receive the Cognito user object
    const [newPassword, setNewPassword] = useState('');
    const [confirmNewPassword, setConfirmNewPassword] = useState('');

    const handleChangePassword = (event) => {
      event.preventDefault();

      // Ensure the new passwords match before submitting
      if (newPassword !== confirmNewPassword) {
        alert("Passwords do not match!");
        return;
      }

      // Complete new password challenge
      user.completeNewPasswordChallenge(newPassword, {}, {
        onSuccess: (data) => {
          console.log("Password change successful!", data);
          navigate("/home"); // Navigate to home or login page after successful password update
        },
        onFailure: (err) => {
          console.error("Failed to change password:", err);
          alert("Failed to change password: " + err.message);
        }
      });
    };

    return (
      <div className="new-password-container">
        <form onSubmit={handleChangePassword}>
          <h2>Set New Password</h2>
          <div>
            <label>New Password: 
              <input 
                type="password" 
                value={newPassword} 
                onChange={e => setNewPassword(e.target.value)} 
                required 
              />
            </label>
          </div>
          <div>
            <label>Confirm New Password: 
              <input 
                type="password" 
                value={confirmNewPassword} 
                onChange={e => setConfirmNewPassword(e.target.value)} 
                required 
              />
            </label>
          </div>
          <button type="submit" className="change-password-button">Change Password</button>
        </form>
      </div>
    );
}

export default NewPassword;
