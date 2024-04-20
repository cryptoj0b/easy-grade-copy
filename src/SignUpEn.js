import React, { useState } from 'react';
import { registerUser } from './UserPool'; // Import the registration function

function SignupEN() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleSignup = (event) => {
        event.preventDefault();

        // Call the registerUser function from UserPool.js
        registerUser(username, password, [],
            (result) => {
                console.log("Registration successful", result);
                // Handle navigation or state update upon successful registration
            },
            (err) => {
                console.error("Registration failed", err);
                setError(err.message || 'Failed to register');
            }
        );
    };

    return (
        <div>
            <h2>Sign Up</h2>
            <form onSubmit={handleSignup}>
                <label>
                    Username:
                    <input
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                    />
                </label>
                <label>
                    Password:
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </label>
                <button type="submit">Sign Up</button>
            </form>
            {error && <p>{error}</p>}
        </div>
    );
}

export default SignupEN;
