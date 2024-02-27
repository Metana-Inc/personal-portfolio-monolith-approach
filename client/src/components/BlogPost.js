import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const BlogPost = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);

  useEffect(() => {
    fetchBlog();
  }, [id]);

  const fetchBlog = async () => {
    try {
      const response = await axios.get(`http://localhost:3001/api/blogs/${id}`);
      setBlog(response.data);
    } catch (error) {
      console.error('Error fetching blog:', error);
    }
  };

  return (
    <div className="container" id="blog-post">
      {blog ? (
        <div>
          <h2 className="mt-4 mb-3">{blog.title}</h2>
          <div className="tags mb-3">
            {blog.tags.map((tag, index) => (
              <span key={index} className="badge bg-secondary me-1">
                {tag}
              </span>
            ))}
          </div>
          <p>{blog.content}</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default BlogPost;
