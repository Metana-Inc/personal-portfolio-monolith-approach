import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import cookieParser from "cookie-parser";
import "./config/mongodbConnection.js";
import projectsRouter from "./routes/projectsRouter.js";
import blogsRouter from "./routes/blogsRouter.js";
import usersRouter from "./routes/usersRouter.js";
import contactsRouter from "./routes/contactRouter.js";

const app = express();
dotenv.config();

const PORT = process.env.PORT;

app.use(express.json());
app.use(cors());
app.use(cookieParser());

// PROJECTS ROUTE
app.use("/api/projects", projectsRouter);

// BLOGS ROUTE
app.use("/api/blogs", blogsRouter);

// USERS ROUTE
app.use("/api/users", usersRouter);

// CONTACTS ROUTE
app.use("/api/contacts", contactsRouter);

// MIDDLEWARE
app.use((err, req, res, next) => {
  res.status(500).send({ message: err.message });
});

app.get("/", (req, res) => {
  res.send("Hello World !!");
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
