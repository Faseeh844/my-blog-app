// frontend/src/pages/BlogDetailPage.js
import React, { useState, useEffect } from 'react';
import apiClient from '../services/api';
import { useParams, useNavigate } from 'react-router-dom';

const BlogDetailPage = () => {
    const [post, setPost] = useState(null);
    const { id } = useParams(); // Get post ID from URL
    const navigate = useNavigate();

    useEffect(() => {
        const fetchPost = async () => {
            try {
                const response = await apiClient.get(`/posts/${id}/`);
                setPost(response.data);
            } catch (error) {
                console.error('Failed to fetch post:', error);
                navigate('/'); // Redirect home if post not found
            }
        };
        fetchPost();
    }, [id, navigate]);

    const handleDelete = async () => {
        if (window.confirm('Are you sure you want to delete this post?')) {
            try {
                await apiClient.delete(`/posts/${id}/`);
                navigate('/');
            } catch (error) {
                console.error('Failed to delete post:', error);
                alert('You do not have permission to delete this post.');
            }
        }
    };

    if (!post) return <p>Loading...</p>;

    return (
        <div>
            <h2>{post.title}</h2>
            <p><em>by {post.author.username}</em></p>
            <p>{post.content}</p>
            <button onClick={handleDelete}>Delete Post</button>
            {/* You would add an edit button here that links to an edit page */}
        </div>
    );
};

export default BlogDetailPage;