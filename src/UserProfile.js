import React from 'react';
import { useUser } from './UserContext';
function UserProfile() {
  const { user } = useUser();

  if (!user) {
    return <p>Please log in</p>;
  }

  return (
    <div>
      <h1>User Profile</h1>
      <p>Welcome, {user.username}!</p>
    </div>
  );
}

export default UserProfile;
