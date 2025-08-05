// frontend/src/pages/SignupPage.js

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import apiClient from '../services/api';

const SignupPage = () => {
    // State for each input field
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [password2, setPassword2] = useState(''); // Password confirmation
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Check if passwords match
        if (password !== password2) {
            alert("Passwords do not match!");
            return;
        }

        try {
            // Send registration data to the backend
            await apiClient.post('/auth/registration/', {
                username,
                email,
                password1: password, // Explicitly set the key to 'password1'
                password2: password2, // And 'password2' for consistency
            });
            
            // On success, notify the user and redirect to the login page
            alert('Registration successful! Please log in.');
            navigate('/login');

        } catch (error) {
            // Handle errors from the API (e.g., username already exists)
            console.error('Registration failed:', error.response.data);
            alert(`Registration failed: ${JSON.stringify(error.response.data)}`);
        }
    };

    return (
        <div>
            <h2>Sign Up</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <input
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        placeholder="Username"
                        required
                    />
                </div>
                <br />
                <div>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Email"
                        required
                    />
                </div>
                <br />
                <div>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Password"
                        required
                    />
                </div>
                <br />
                <div>
                    <input
                        type="password"
                        value={password2}
                        onChange={(e) => setPassword2(e.target.value)}
                        placeholder="Confirm Password"
                        required
                    />
                </div>
                <br />
                <button type="submit">Sign Up</button>
            </form>
        </div>
    );
};

export default SignupPage;