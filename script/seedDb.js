// Seeds example blogs on our MongoDB connection

import axios from "axios";
import { blogs } from "../data/BlogData";

async function seedBlogs() {
  console.log("Seeding blog data...");

  for (var blog in blogs) {
    try {
      await axios.post("/api/blogs", {
        title: blog.title,
        content: blog.content,
        images: blog.images,
        tags: blog.tags.split(",").map((tag) => tag.trim()), // Split tags by comma and trim whitespace
      });
    } catch (error) {
      console.error("Error creating blog:", error);
    }
  }
}

await seedBlogs();
