// frontend/src/pages/CreatePostPage.js

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import apiClient from '../services/api';

const CreatePostPage = () => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            // The API expects a 'title' and 'content' field
            await apiClient.post('/posts/', { title, content });
            // After successful creation, navigate to the homepage
            navigate('/');
        } catch (error) {
            console.error('Failed to create post:', error);
            alert('Failed to create post. Please try again.');
        }
    };

    return (
        <div>
            <h2>Create a New Post</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="title">Title:</label>
                    <br />
                    <input
                        type="text"
                        id="title"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        required
                        style={{ width: '50%' }}
                    />
                </div>
                <br />
                <div>
                    <label htmlFor="content">Content:</label>
                    <br />
                    <textarea
                        id="content"
                        value={content}
                        onChange={(e) => setContent(e.target.value)}
                        required
                        rows="10"
                        style={{ width: '50%' }}
                    />
                </div>
                <br />
                <button type="submit">Publish Post</button>
            </form>
        </div>
    );
};

export default CreatePostPage;