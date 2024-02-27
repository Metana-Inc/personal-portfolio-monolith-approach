import React, { useState, useEffect } from "react";
import axios from "axios";
import BASE_URL from "../config";

const AdminDashboard = () => {
  const [blogs, setBlogs] = useState([]);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [images, setImages] = useState([]);
  const [tags, setTags] = useState("");
  const [editingId, setEditingId] = useState(null); // To track the id of the blog being edited

  useEffect(() => {
    fetchBlogs();
  }, []);

  const fetchBlogs = async () => {
    try {
      const response = await axios.get(BASE_URL + "api/blogs");
      setBlogs(response.data.blogs);
    } catch (error) {
      console.error("Error fetching blogs:", error);
    }
  };

  const handleCreateBlog = async () => {
    try {
      await axios.post(BASE_URL + "api/blogs", {
        title,
        content,
        images,
        tags: tags.split(",").map((tag) => tag.trim()), // Split tags by comma and trim whitespace
      });
      fetchBlogs();
    } catch (error) {
      console.error("Error creating blog:", error);
    }
  };

  const handleDeleteBlog = async (id) => {
    try {
      await axios.delete(BASE_URL + `api/blogs/${id}`);
      fetchBlogs();
    } catch (error) {
      console.error("Error deleting blog:", error);
    }
  };

  const handleEditBlog = async (id) => {
    try {
      const updatedBlog = {
        title: title,
        content: content,
        images: images,
        tags: tags.split(",").map((tag) => tag.trim()), // Split tags by comma and trim whitespace
      };

      const response = await axios.put(
        BASE_URL + `api/blogs/${id}`,
        updatedBlog
      );

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
    setTags(tags.join(", ")); // Join tags with comma and space for textarea value
  };

  const handleSaveEdit = () => {
    handleEditBlog(editingId);
    setEditingId(null);
    setTitle("");
    setContent("");
    setImages([]);
    setTags("");
  };

  return (
    <div className="container">
      <h2 className="mt-4 mb-3 fw-bold text-uppercase">Admin Dashboard</h2>

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
        {/* <div className="mb-3">
          <input
            type="file"
            onChange={(e) => setImages(e.target.files)}
            multiple
            className="form-control"
          />
        </div> */}
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
      <table className="table">
        <thead>
          <tr>
            <th>Title</th>
            <th>Content</th>
            <th>Tags</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {blogs.map((blog) => (
            <tr key={blog._id}>
              <td>
                {editingId === blog._id ? (
                  <input
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    className="form-control"
                  />
                ) : (
                  blog.title
                )}
              </td>
              <td>
                {editingId === blog._id ? (
                  <textarea
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                    className="form-control"
                  ></textarea>
                ) : (
                  blog.content
                )}
              </td>
              <td>
                {editingId === blog._id ? (
                  <textarea
                    value={tags}
                    onChange={(e) => setTags(e.target.value)}
                    className="form-control"
                  ></textarea>
                ) : (
                  blog.tags.map((tag, index) => (
                    <div key={index} className="tag btn btn-light ml-1">
                      {tag}
                    </div>
                  ))
                )}
              </td>
              <td>
                {editingId === blog._id ? (
                  <button onClick={handleSaveEdit} className="btn btn-success">
                    Save
                  </button>
                ) : (
                  <>
                    <button
                      onClick={() =>
                        handleEditButtonClick(
                          blog._id,
                          blog.title,
                          blog.content,
                          blog.tags
                        )
                      }
                      className="btn btn-warning me-1"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDeleteBlog(blog._id)}
                      className="btn btn-danger"
                    >
                      Delete
                    </button>
                  </>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AdminDashboard;
