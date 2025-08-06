import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import BlogListPage from './pages/BlogListPage';
import BlogDetailPage from './pages/BlogDetailPage';
import LoginPage from './pages/LoginPage';
import CreatePostPage from './pages/CreatePostPage';
import SignupPage from './pages/SignupPage';
import './App.css';
import apiClient from './services/api'; // Make sure apiClient is imported

function App() {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [currentUser, setCurrentUser] = useState(null); // <-- Add state for user

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (token) {
            setIsAuthenticated(true);
            // If authenticated, fetch the user details
            apiClient.get('/auth/user/')
                .then(response => {
                    setCurrentUser(response.data);
                })
                .catch(error => {
                    console.error("Failed to fetch user:", error);
                    // Handle token expiration, etc.
                    setIsAuthenticated(false); 
                    localStorage.removeItem('token');
                });
        } else {
            setIsAuthenticated(false);
            setCurrentUser(null);
        }
    }, [isAuthenticated]); // Re-run this effect when isAuthenticated changes

    return (
        <Router>
            <Navbar isAuthenticated={isAuthenticated} setAuth={setIsAuthenticated} />
            <div className="container">
                <Routes>
                    <Route path="/" element={<BlogListPage />} />
                    {/* Pass the currentUser prop to the detail page */}
                    <Route path="/posts/:id" element={<BlogDetailPage currentUser={currentUser} />} />
                    <Route path="/login" element={<LoginPage setAuth={setIsAuthenticated} />} />
                    <Route path="/signup" element={<SignupPage />} />
                    <Route
                        path="/create-post"
                        element={isAuthenticated ? <CreatePostPage /> : <Navigate to="/login" />}
                    />
                </Routes>
            </div>
        </Router>
    );
}

export default App;