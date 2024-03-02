// Seeds example blogs on our mongoDB connection
import mongoose from "mongoose";
import dotenv from "dotenv";
import Blog from "../models/blogModel.js";
import BlogData from "../data/BlogData.js";
import fs from "fs";
const ENV_FILE = ".env";

// Load environment settings
function loadEnv() {
  if (!fs.existsSync(ENV_FILE)) {
    throw `env file not found: ${ENV_FILE}`;
  }
  dotenv.config({ path: ENV_FILE });
}

// Connects to the Mongo database
async function connectDb() {
  const dbURI = process.env.MONGODB_URI;
  const dbName = process.env.DB_NAME;

  if (!dbURI || !dbName) {
    throw `db URI or dbName is empty`;
  }

  try {
    await mongoose.connect(dbURI, { dbName });
    console.log(`[+] mongoDB connected: ${dbName}`);
  } catch (err) {
    throw "mongoDB connection error: " + err;
  }
}

// Close the database connection
const closeDBConn = () => {
  mongoose.connection.close();
  console.log("[+] mongoDB connection closed");
};

// Clean up seeded data
const cleanupSeedPosts = async () => {
  console.log("[+] cleaning up seed posts data...");

  try {
    // FIXME --  we should probably have a check against IDs
    // to make sure we don't accidentally delete production data.
    await Blog.deleteMany({});
    console.log("[+] clean up seed posts -- ok");
  } catch (err) {
    throw "cleanup seed posts failed: " + err;
  }
};

// Function to seed blog posts
const seedBlogPosts = async () => {
  console.log("[+] creating seed posts...");
  try {
    // Insert new blog posts
    const createdBlogs = await Blog.insertMany(BlogData.blogs);
    console.log("[+] blog posts seeded:", createdBlogs);
  } catch (err) {
    throw `seed blog posts failed: ${err}`;
  }
};

// Start DB connection, Clean up old posts, seed posts, and exit.
async function run() {
  try {
    loadEnv();
    await connectDb();
    await cleanupSeedPosts();
    await seedBlogPosts();
  } catch (err) {
    console.error("[error] db seeding failed: ", err);
  } finally {
    closeDBConn();
  }
}

run();
