// frontend/src/App.js

import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import BlogListPage from './pages/BlogListPage';
import BlogDetailPage from './pages/BlogDetailPage';
import LoginPage from './pages/LoginPage';
import CreatePostPage from './pages/CreatePostPage';
import SignupPage from './pages/SignupPage'; // 1. Import the new page

function App() {
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (token) {
            setIsAuthenticated(true);
        }
    }, []);

    return (
        <Router>
            <Navbar isAuthenticated={isAuthenticated} setAuth={setIsAuthenticated} />
            <div className="container" style={{ padding: '0 2rem' }}>
                <Routes>
                    <Route path="/" element={<BlogListPage />} />
                    <Route path="/posts/:id" element={<BlogDetailPage />} />
                    <Route path="/login" element={<LoginPage setAuth={setIsAuthenticated} />} />
                    <Route path="/signup" element={<SignupPage />} /> {/* 2. Add the new route */}
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