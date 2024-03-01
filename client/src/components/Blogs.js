import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetchBlogs();
  }, []);

  const fetchBlogs = async () => {
    try {
      const response = await axios.get("/api/blogs");
      setBlogs(response.data.blogs);
    } catch (error) {
      console.error("Error fetching blogs:", error);
    }
  };

  return (
    <div className="container" id="blogs">
      <div className="article">
        <h2 className="mb-5"></h2>
        <div className="row">
          {blogs.map((blog) => (
            <div key={blog._id} className="col-lg-4 col-md-6 mb-4">
              <div className="card h-100">
                <div className="card-body">
                  {/* Replace the image tag with your blog image */}
                  {/* <img src={blog.image} className="card-img-top" alt="Blog" /> */}
                  <h5 className="card-title">{blog.title}</h5>
                  <p className="card-text">{blog.content}</p>
                  <div className="d-flex flex-wrap">
                    {blog.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="badge bg-secondary me-1 mb-1"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="card-footer">
                  <Link
                    to={`/blogs/${blog._id}`}
                    className="btn btn-primary"
                    style={{
                      backgroundColor: "#ff6300",
                      borderColor: "#ff6300",
                    }}
                  >
                    Read More
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blogs;
