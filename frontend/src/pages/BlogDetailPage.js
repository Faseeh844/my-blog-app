import React, { useState, useEffect } from 'react';
import apiClient from '../services/api';
import { useParams, useNavigate } from 'react-router-dom';

// 1. Receive the currentUser prop
const BlogDetailPage = ({ currentUser }) => { 
    const [post, setPost] = useState(null);
    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        const fetchPost = async () => {
            try {
                const response = await apiClient.get(`/posts/${id}/`);
                setPost(response.data);
            } catch (error) {
                console.error('Failed to fetch post:', error);
                navigate('/');
            }
        };
        fetchPost();
    }, [id, navigate]);

    const handleDelete = async () => {
        if (window.confirm('Are you sure you want to delete this post?')) {
            try {
                await apiClient.delete(`/posts/${id}/`);
                navigate('/'); // Redirect to blog list after deletion
            } catch (error) {
                console.error('Failed to delete the post:', error);
                // Optionally: show an error message to the user
            }
        }
    };

    if (!post) return <p>Loading...</p>;
    
    // 2. New logic: Check if the user exists and is either the author or a superuser
    const canPerformActions = currentUser && (currentUser.pk === post.author.id || currentUser.is_superuser);

    return (
        <div className="post-detail">
            <h2>{post.title}</h2>
            <p className="post-detail-meta">
                <em>by {post.author.username} on {new Date(post.created_at).toLocaleDateString()}</em>
            </p>
            <p className="post-detail-content">{post.content}</p>
            
            {/* 3. Use the new variable to conditionally render the button */}
            {canPerformActions && (
                <button onClick={handleDelete} className="delete-button">Delete Post</button>
            )}
        </div>
    );
};

export default BlogDetailPage;