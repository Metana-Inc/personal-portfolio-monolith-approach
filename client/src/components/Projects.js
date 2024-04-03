import React, { useState, useEffect } from "react";
import axios from "axios";

const Projects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await axios.get("/api/projects");
        setProjects(response.data.projects);
      } catch (error) {
        console.error("Error fetching projects:", error);
      }
    };

    fetchProjects();
  }, []);

  return (
    <div className="container">
      <h1 className="text-center mt-5 mb-4" style={{ fontWeight: "bold" }}>
        My Projects
      </h1>
      <p className="mt-3 mb-5 text-center">
        These are just a few of the services we offer. Contact us to learn more
        about our full range of services and how we can help your business
        succeed.These are just a few of the services we offer. Contact us to
        learn more about our full range of services and how we can help your
        business succeed.
      </p>
      <div className="row">
        {projects.map((project) => (
          <div key={project._id} className="col-md-4 mb-4">
            <div className="card">
              <a href={project.projectLink} target="_blank" rel="noopener noreferrer">
                <img
                  src={project.Image}
                  className="card-img-top"
                  alt={project.name}
                  style={{ height: "200px", objectFit: "cover" }}
                />
              </a>
              <div className="card-body">
                <h5 className="card-title">{project.name}</h5>
                <p className="card-text">{project.description}</p>
                <a
                  href={project.projectLink}
                  className="btn btn-primary"
                  target="_blank"
                  style={{ backgroundColor: "#ff6300", borderColor: "#ff6300" }}
                  rel="noopener noreferrer"
                >
                  View Project
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
