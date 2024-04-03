import React, { useState, useEffect } from "react";
import axios from "axios";

const AdminProjects = () => {
  const [projects, setProjects] = useState([]);
  const [name, setName] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [projectLink, setProjectLink] = useState("");
  const [description, setDescription] = useState("");

  useEffect(() => {
    fetchProjects();
  }, []);

  const fetchProjects = async () => {
    try {
      const response = await axios.get("/api/projects");
      setProjects(response.data.projects);
    } catch (error) {
      console.error("Error fetching projects:", error);
    }
  };

  const handleCreateProject = async () => {
    try {
      await axios.post("/api/projects", {
        name,
        imageUrl,
        projectLink,
        description,
      });
      fetchProjects();
    } catch (error) {
      console.error("Error creating project:", error);
    }
  };

  const handleUpdateProject = async (id) => {
    try {
      await axios.put(`/api/projects/${id}`, {
        name,
        imageUrl,
        projectLink,
        description,
      });
      fetchProjects();
    } catch (error) {
      console.error("Error updating project:", error);
    }
  };

  const handleDeleteProject = async (id) => {
    try {
      await axios.delete(`/api/projects/${id}`);
      fetchProjects();
    } catch (error) {
      console.error("Error deleting project:", error);
    }
  };

  return (
    <div className="container">
      <h2 className="mt-4 mb-3 fw-bold text-uppercase">Manage Projects</h2>
      <form onSubmit={handleCreateProject} className="mb-4">
        <div className="mb-3">
          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="form-control"
          />
        </div>
        <div className="mb-3">
          <input
            type="text"
            placeholder="Image URL"
            value={imageUrl}
            onChange={(e) => setImageUrl(e.target.value)}
            className="form-control"
          />
        </div>
        <div className="mb-3">
          <input
            type="text"
            placeholder="Project Link"
            value={projectLink}
            onChange={(e) => setProjectLink(e.target.value)}
            className="form-control"
          />
        </div>
        <div className="mb-3">
          <textarea
            placeholder="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
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
          Create Project
        </button>
      </form>
      <ul className="list-group">
        {projects.map((project) => (
          <li key={project._id} className="list-group-item">
            <h3>{project.name}</h3>
            <p>{project.description}</p>
            <button
              onClick={() => handleUpdateProject(project._id)}
              className="btn btn-success me-2"
            >
              Update
            </button>
            <button
              onClick={() => handleDeleteProject(project._id)}
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

export default AdminProjects;
