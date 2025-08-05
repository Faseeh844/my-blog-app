import React, { useState, useEffect } from 'react';
import apiClient from '../services/api';
import { Link } from 'react-router-dom';

const BlogListPage = () => {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const response = await apiClient.get('/posts/');
                setPosts(response.data.results); // DRF pagination wraps results in a 'results' key
                setLoading(false);
            } catch (error) {
                console.error('Failed to fetch posts:', error);
                setLoading(false);
            }
        };

        fetchPosts();
    }, []);

    if (loading) return <p>Loading posts...</p>;

    return (
        <div>
            <h2>All Blog Posts</h2>
            {posts.length === 0 ? (
                <p>No posts yet. Be the first to create one!</p>
            ) : (
                posts.map((post) => (
                    <div key={post.id} style={{ borderBottom: '1px solid #ccc', marginBottom: '1rem', paddingBottom: '1rem' }}>
                        <h3>
                            <Link to={`/posts/${post.id}`}>{post.title}</Link>
                        </h3>
                        <p>by {post.author.username} on {new Date(post.created_at).toLocaleDateString()}</p>
                    </div>
                ))
            )}
        </div>
    );
};

export default BlogListPage;