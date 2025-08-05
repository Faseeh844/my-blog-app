import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Navbar = ({ isAuthenticated, setAuth }) => {
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem('token');
        setAuth(false);
        navigate('/login');
    };

    return (
        <nav style={{ background: '#f0f0f0', padding: '1rem', marginBottom: '1rem' }}>
            <Link to="/" style={{ marginRight: '1rem' }}>Home</Link>
            {isAuthenticated ? (
                <>
                    <Link to="/create-post" style={{ marginRight: '1rem' }}>Create Post</Link>
                    <button onClick={handleLogout}>Logout</button>
                </>
            ) : (
                <Link to="/login">Login</Link>
            )}
        </nav>
    );
};

export default Navbar;