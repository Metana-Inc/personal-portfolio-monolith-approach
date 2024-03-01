import express from "express";
import expressAsyncHandler from "express-async-handler";
import Projects from "../models/projectModel.js";

const projectsRouter = express.Router();
projectsRouter.use(express.json());

// Get all projects
projectsRouter.get(
  "/",
  expressAsyncHandler(async (req, res) => {
    try {
      const projects = await Projects.find({});
      res.send({ projects });
    } catch (error) {
      res.status(500).json({ message: "Internal server error" });
    }
  })
);

// Get a single project by ID
projectsRouter.get(
  "/:id",
  expressAsyncHandler(async (req, res) => {
    try {
      const project = await Projects.findById(req.params.id);
      if (project) {
        res.send(project);
      } else {
        res.status(404).send({ message: "Project not found" });
      }
    } catch (error) {
      res.status(500).json({ message: "Internal server error" });
    }
  })
);

// Create a project
projectsRouter.post(
  "/",
  expressAsyncHandler(async (req, res) => {
    const project = new Projects({
      name: "Sample Project",
      Image: "/images/sample.jpg",
      projectLink: "https://example.com/sample",
      description: "Sample description",
      imageTitle: [
        {
          title: "Sample Image 1",
          image: "/images/sample_1.jpg",
        },
        {
          title: "Sample Image 2",
          image: "/images/sample_2.jpg",
        },
      ],
    });
    const createdProject = await project.save();
    res.send({ message: "Project created", project: createdProject });
  })
);

// Update a project
projectsRouter.put(
  "/:id",
  expressAsyncHandler(async (req, res) => {
    const projectId = req.params.id;
    const project = await Projects.findById(projectId);

    if (project) {
      project.name = req.body.name || project.name;
      project.Image = req.body.imageUrl || project.Image;
      project.projectLink = req.body.projectLink || project.projectLink;
      project.description = req.body.description || project.description;
      const updatedProject = await project.save();
      res.send({ message: "Project updated", project: updatedProject });
    } else {
      res.status(404).send({ message: "Project not found" });
    }
  })
);

// Delete a project
projectsRouter.delete(
  "/:id",
  expressAsyncHandler(async (req, res) => {
    const project = await Projects.findById(req.params.id);
    if (project) {
      const deleteProject = await project.deleteOne();
      res.send({ message: "Project deleted", project: deleteProject });
    } else {
      res.status(404).send({ message: "Project not found" });
    }
  })
);

export default projectsRouter;
