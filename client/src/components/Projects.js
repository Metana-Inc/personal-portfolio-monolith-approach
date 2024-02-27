import React from "react";

const Projects = () => {
  // Define your project data here
  const projects = [
    {
      id: 1,
      title: "Project 1",
      thumbnail: "project1.png",
      link: "https://example.com/project1",
      description: "This is the description for Project 1.",
    },
    {
      id: 2,
      title: "Project 2",
      thumbnail: "project.jpg",
      link: "https://example.com/project2",
      description: "This is the description for Project 2.",
    },
    {
      id: 1,
      title: "Project 1",
      thumbnail: "project1.png",
      link: "https://example.com/project1",
      description: "This is the description for Project 1.",
    },
    {
      id: 2,
      title: "Project 2",
      thumbnail: "project.jpg",
      link: "https://example.com/project2",
      description: "This is the description for Project 2.",
    }, {
        id: 1,
        title: "Project 1",
        thumbnail: "project1.png",
        link: "https://example.com/project1",
        description: "This is the description for Project 1.",
      },
      {
        id: 2,
        title: "Project 2",
        thumbnail: "project.jpg",
        link: "https://example.com/project2",
        description: "This is the description for Project 2.",
      },
  ];

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
          <div key={project.id} className="col-md-4 mb-4">
            <div className="card">
              <a href={project.link} target="_blank" rel="noopener noreferrer">
                <img
                  src={project.thumbnail}
                  className="card-img-top"
                  alt={project.title}
                  style={{ height: "200px", objectFit: "cover" }}
                />
              </a>
              <div className="card-body">
                <h5 className="card-title">{project.title}</h5>
                <p className="card-text">{project.description}</p>
                <a
                  href={project.link}
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
