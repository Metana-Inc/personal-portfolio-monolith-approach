// Seeds example blogs on our MongoDB connection
import mongoose from "mongoose";
import dotenv from "dotenv";
import Blog from "../models/blogModel.js";
import BlogData from "../data/BlogData.js";

// Connects to the Mongo database
async function connectDb() {
  dotenv.config({ path: "./config/.env" });
  const dbURI = process.env.MONGO_URI;
  const dbName = process.env.DB_NAME;

  try {
    await mongoose.connect(dbURI, { dbName });
    console.log(`MongoDB connected: ${dbName}`);
  } catch (err) {
    throw "MongoDB connection error: " + err;
  }
}

// Close the database connection
const closeDBConn = () => {
  mongoose.connection.close();
  console.log("MongoDB connection closed");
};

// Clean up seeded data
// FIXME --  we should probably have a check against IDs
// to make sure we don't accidentally delete production data.
const cleanupSeedPosts = async () => {
  // Connect to the Mongo db
  await connectDb();

  try {
    console.log("[+] cleaning up seed posts data...");
    // Clean up the blog collection
    // Leaving this commented out -- we should probably have a check against IDs to make sure
    // we don't accidentally delete production data.
    // await Blog.deleteMany({});
    console.log("[debug] not yet implemented: cleanup seed posts");
  } catch (err) {
    throw "cleanup seed posts failed: " + err;
  } finally {
    closeDBConn();
  }
};

// Function to seed blog posts
const seedBlogPosts = async () => {
  console.log("[+] creating seed posts...");

  // Connect to the Mongo db
  await connectDb();

  try {
    // Clean up the blog collection
    await cleanupSeedPosts();

    // const deleteBlogs = await Blog.deleteMany({});
    // console.log("Blog collection cleaned up");

    // Insert new blog posts
    const createdBlogs = await Blog.insertMany(blogPosts);
    console.log("[+] blog posts seeded:", createdBlogs);
  } catch (err) {
    console.error("[error] seed failed:", err);
  } finally {
    closeDBConn();
  }
};

// Execute the function
seedBlogPosts();
