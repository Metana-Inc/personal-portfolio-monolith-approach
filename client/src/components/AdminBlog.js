import React, { useState, useEffect } from "react";
import axios from "axios";

const AdminBlog = () => {
  const [blogs, setBlogs] = useState([]);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [tags, setTags] = useState("");
  const [editingId, setEditingId] = useState(null); // To track the id of the blog being edited

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

  const handleCreateBlog = async () => {
    try {
      await axios.post("/api/blogs", {
        title,
        content,
        tags: tags.split(",").map((tag) => tag.trim()), // Split tags by comma and trim whitespace
      });
      fetchBlogs();
    } catch (error) {
      console.error("Error creating blog:", error);
    }
  };

  const handleDeleteBlog = async (id) => {
    try {
      await axios.delete(`/api/blogs/${id}`);
      fetchBlogs();
    } catch (error) {
      console.error("Error deleting blog:", error);
    }
  };

  const handleEditBlog = async (id) => {
    try {
      const updatedBlog = {
        title,
        content,
        tags: tags.split(",").map((tag) => tag.trim()), // Split tags by comma and trim whitespace
      };

      const response = await axios.put(`/api/blogs/${id}`, updatedBlog);

      if (response.data.message === "Blog Updated") {
        fetchBlogs();
        console.log("Blog updated successfully:", response.data.blog);
      } else {
        console.error("Error updating blog:", response.data.message);
      }
    } catch (error) {
      console.error("Error updating blog:", error);
    }
  };

  const handleEditButtonClick = (id, title, content, tags) => {
    setEditingId(id);
    setTitle(title);
    setContent(content);
    setTags(tags); // Update tags directly without using join(", ")
  };

  const handleSaveEdit = () => {
    handleEditBlog(editingId);
    setEditingId(null);
    setTitle("");
    setContent("");
    setTags("");
  };

  return (
    <div className="container">
      <h2 className="mt-4 mb-3 fw-bold text-uppercase">Manage Blogs</h2>
      {/* Create Blog Form */}
      <form onSubmit={handleCreateBlog} className="mb-4">
        <div className="mb-3">
          <input
            type="text"
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="form-control"
          />
        </div>
        <div className="mb-3">
          <textarea
            placeholder="Content"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            className="form-control"
          ></textarea>
        </div>
        <div className="mb-3">
          <textarea
            placeholder="Tags (separate with commas)"
            value={tags}
            onChange={(e) => setTags(e.target.value)}
            className="form-control"
          ></textarea>
        </div>
        <button
          type="submit"
          className="btn btn-primary"
          style={{
            backgroundColor: "#ff6300",
            borderColor: "#ff6300",
          }}
        >
          Create Blog
        </button>
      </form>
      {/* Display Blogs */}
      <ul className="list-group">
        {blogs.map((blog) => (
          <li key={blog._id} className="list-group-item">
            {editingId === blog._id ? (
              <>
                <input
                  type="text"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  className="form-control mb-2"
                />
                <textarea
                  value={content}
                  onChange={(e) => setContent(e.target.value)}
                  className="form-control mb-2"
                ></textarea>
                <textarea
                  value={tags}
                  onChange={(e) => setTags(e.target.value)}
                  className="form-control mb-2"
                ></textarea>
                <button
                  onClick={handleSaveEdit}
                  className="btn btn-success me-2"
                >
                  Save
                </button>
              </>
            ) : (
              <>
                <h3>{blog.title}</h3>
                <p>{blog.content}</p>
                <ul className="list-inline">
                  {blog.tags.map((tag, index) => (
                    <li key={index} className="list-inline-item">
                      <button className="btn btn-light">{tag}</button>
                    </li>
                  ))}
                </ul>
                <button
                  onClick={() =>
                    handleEditButtonClick(
                      blog._id,
                      blog.title,
                      blog.content,
                      blog.tags.join(", ")
                    )
                  }
                  className="btn btn-warning me-2"
                >
                  Edit
                </button>
              </>
            )}
            <button
              onClick={() => handleDeleteBlog(blog._id)}
              className="btn btn-danger"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AdminBlog;
