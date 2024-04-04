import express from "express";
import expressAsyncHandler from "express-async-handler";
import userModel from "../models/userModel.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

const usersRouter = express.Router();
usersRouter.use(express.json());

// Register
usersRouter.post(
  "/register",
  expressAsyncHandler(async (req, res) => {
    const { name, email, password } = req.body;
    const userExists = await userModel.findOne({ email: email }).exec();
    if (userExists) {
      res.status(400).send({ message: "User already exists" });
      return;
    }
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    const user = new userModel({
      name,
      email,
      password: hashedPassword,
    });
    const createdUser = await user.save();

    // Generate JWT token
    const token = jwt.sign({ _id: createdUser._id }, process.env.JWT_SECRET, {
      expiresIn: "30d",
    });

    // Set the token as an HttpOnly cookie
    res.cookie('jwt', token, {
      httpOnly: true,
      secure: true, // Set to true in production for HTTPS
      sameSite: 'strict' // or 'lax' depending on your requirements
    });

    // Respond with user information
    res.send({
      _id: createdUser._id,
      name: createdUser.name,
      email: createdUser.email,
      role: createdUser.role,
    });
  })
);

// Login
usersRouter.post(
  "/login",
  expressAsyncHandler(async (req, res) => {
    const { email, password } = req.body;
    const user = await userModel.findOne({ email: email }).exec();
    if (user) {
      const validPassword = await bcrypt.compare(password, user.password);
      if (validPassword) {
        // Generate JWT token
        const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET, {
          expiresIn: "30d",
        });

        // Set the token as an HttpOnly cookie
        res.cookie('jwt', token, {
          httpOnly: true,
          secure: true, // Set to true in production for HTTPS
          sameSite: 'strict' // or 'lax' depending on your requirements
        });

        // Respond with user information
        res.send({
          _id: user._id,
          name: user.name,
          email: user.email,
          role: user.role,
        });
        return;
      }
    }
    res.status(401).send({ message: "Invalid email or password" });
  })
);

// Logout
usersRouter.get(
  "/logout",
  (req, res) => {
    // Clear the jwt cookie
    res.clearCookie('jwt', { path: '/login' });
    
  
    // Respond with a success message
    res.send({ message: "Logged out successfully" });
  }
);


// Get all users (protected route)
usersRouter.get(
  "/",
 
  expressAsyncHandler(async (req, res) => {
    const users = await userModel.find({}).exec();
    res.send(users);
  })
);

// Create User (protected route)
usersRouter.post(
  "/",

  expressAsyncHandler(async (req, res) => {
    const { name, email, password, role } = req.body;
    const userExists = await userModel.findOne({ email: email });
    if (userExists) {
      res.status(400).send({ message: "User already exists" });
      return;
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = new userModel({ name, email, password: hashedPassword, role });
    const createdUser = await user.save();
    res.status(201).send({ message: "User created", user: createdUser });
  })
);

// Delete User (protected route)
usersRouter.delete(
  "/:id",

  expressAsyncHandler(async (req, res) => {
    const userId = req.params.id;
    const user = await userModel.findById(userId);
    if (user) {
      await user.remove();
      res.send({ message: "User deleted successfully" });
    } else {
      res.status(404).send({ message: "User not found" });
    }
  })
);

// Edit User (protected route)
usersRouter.put(
  "/:id",
 
  expressAsyncHandler(async (req, res) => {
    const userId = req.params.id;
    const { name, email, role } = req.body;
    const user = await userModel.findById(userId);
    if (user) {
      user.name = name || user.name;
      user.email = email || user.email;
      user.role = role || user.role;
      const updatedUser = await user.save();
      res.send({ message: "User updated successfully", user: updatedUser });
    } else {
      res.status(404).send({ message: "User not found" });
    }
  })
);


export default usersRouter;
