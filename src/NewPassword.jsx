import React, {useState, useEffect} from "react";

export default function NewPassword({ user, onSubmit }) {
    const [newPassword, setNewPassword] = useState('');
    const [confirmNewPassword, setConfirmNewPassword] = useState('');
  
    const handleChangePassword = (event) => {
      event.preventDefault();
      user.completeNewPasswordChallenge(newPassword, {
        // You may also need to pass updated attributes here
      }, {
        onSuccess: (data) => {
          console.log("Password change successful!", data);
          onSubmit();
        },
        onFailure: (err) => {
          console.error("Failed to change password:", err);
        }
      });
    };
  
    return (
      <form onSubmit={handleChangePassword}>
        <label>New Password: 
          <input type="password" value={newPassword} className="border-black border-[1px] border-solid rounded " onChange={(e) => setNewPassword(e.target.value)} required />
        </label>
        <br/>
        <label>Confirm password: 
          <input type="password" value={confirmNewPassword} className="border-black border-[1px] border-solid rounded mt-4" onChange={(e) => setConfirmNewPassword(e.target.value)} required />
        </label>
        <br/>
        <button type="submit" className="border-[2px] border-black mt-4 rounded border-solid w-[150px]">Change Password</button>
      </form>
    );
  }