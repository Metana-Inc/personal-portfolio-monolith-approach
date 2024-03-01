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
    }
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    const user = new userModel({
      name,
      email,
      password: hashedPassword,
    });
    const createdUser = await user.save();
    res.send({
      _id: createdUser._id,
      name: createdUser.name,
      email: createdUser.email,
      role: createdUser.role,
      token: jwt.sign({ _id: createdUser._id }, process.env.JWT_SECRET, {
        expiresIn: "30d",
      }),
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
        const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET, {
          expiresIn: "30d",
        });
        if (user.role === "admin") {
          // Redirect to admin dashboard
          res.send({
            message: "Admin Login",
            _id: user._id,
            name: user.name,
            email: user.email,
            role: user.role,
            token: token,
          });
          return;
        }

        res.send({
          _id: user._id,
          name: user.name,
          email: user.email,
          role: user.role,
          token: token,
        });
        return;
      }
    }
    res.status(401).send({ message: "Invalid email or password" });
  })
);

// Get all users
usersRouter.get(
  "/",
  expressAsyncHandler(async (req, res) => {
    const users = await userModel.find({}).exec();
    res.send(users);
  })
);

export default usersRouter;
