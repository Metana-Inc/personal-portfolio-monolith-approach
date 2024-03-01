import express from "express";
import expressAsyncHandler from "express-async-handler";
import blogModel from "../models/blogModel.js";
import BlogData from "../data/BlogData.js";

const blogsRouter = express.Router();
blogsRouter.use(express.json());

// Get all blogs
blogsRouter.get(
  "/",
  expressAsyncHandler(async (req, res) => {
    try {
      const blogs = await blogModel.find({});
      res.send({ blogs });
    } catch (error) {
      res.status(500).json({ message: "Internal server error" });
    }
  })
);

// Get a single blog by ID
blogsRouter.get(
  "/:id",
  expressAsyncHandler(async (req, res) => {
    try {
      const blog = await blogModel.findById(req.params.id);
      if (blog) {
        res.send(blog);
      } else {
        res.status(404).send({ message: "Blog not found" });
      }
    } catch (error) {
      res.status(500).json({ message: "Internal server error" });
    }
  })
);

// // Create a blog testing
// blogsRouter.post(
//   "/",
//   expressAsyncHandler(async (req, res) => {
//     const blog = new blogModel({
//       title: "Sample Blog",
//       content: "Sample content",
//       images: ["/images/sample.jpg"],
//       tags: ["tag1", "tag2"],
//     });
//     const createdBlog = await blog.save();
//     res.status(201).send({ message: "Blog Created", blog: createdBlog });
//   })
// );

// Create a blog
blogsRouter.post(
  "/",
  expressAsyncHandler(async (req, res) => {
    const { title, content, images, tags } = req.body;

    const blog = new blogModel({
      title,
      content,
      images,
      tags,
    });

    try {
      const createdBlog = await blog.save();
      res.status(201).send({ message: "Blog Created", blog: createdBlog });
    } catch (error) {
      res.status(500).json({ message: "Failed to create blog", error });
    }
  })
);

// Update a blog
blogsRouter.put(
  "/:id",
  expressAsyncHandler(async (req, res) => {
    const blog = await blogModel.findById(req.params.id);
    if (blog) {
      blog.title = req.body.title || blog.title;
      blog.content = req.body.content || blog.content;
      blog.images = req.body.images || blog.images;
      blog.tags = req.body.tags || blog.tags;

      const updatedBlog = await blog.save();
      res.send({ message: "Blog Updated", blog: updatedBlog });
    } else {
      res.status(404).send({ message: "Blog not found" });
    }
  })
);

// Delete a blog
blogsRouter.delete(
  "/:id",
  expressAsyncHandler(async (req, res) => {
    const blog = await blogModel.findById(req.params.id);
    if (blog) {
      await blog.deleteOne();
      res.send({ message: "Blog Deleted" });
    } else {
      res.status(404).send({ message: "Blog not found" });
    }
  })
);

export default blogsRouter;
