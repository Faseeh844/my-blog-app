import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import apiClient from '../services/api';

const LoginPage = ({ setAuth }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await apiClient.post('/auth/login/', {
                username,
                password,
            });
            const token = response.data.key;
            localStorage.setItem('token', token);
            setAuth(true); // Update auth state in App.js
            navigate('/'); // Redirect to homepage
        } catch (error) {
            console.error('Login failed:', error);
            alert('Login failed! Please check your credentials.');
        }
    };

    return (
        <div>
            <h2>Login</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    placeholder="Username"
                    required
                />
                <br />
                <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Password"
                    required
                />
                <br />
                <button type="submit">Login</button>
            </form>
        </div>
    );
};

export default LoginPage;