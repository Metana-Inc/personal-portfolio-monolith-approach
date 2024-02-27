import mongoose from "mongoose";

const projectSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, unique: true },
    Image: { type: String, required: true },
    projectLink: { type: String, required: true },
    description: { type: String, required: true },
    imageTitle: [
      {
        title: { type: String, required: true },
        image: { type: String, required: true },
      },
    ],
  },
  { timestamps: true }
);

const Projects = mongoose.model("Projects", projectSchema);

export default Projects;
