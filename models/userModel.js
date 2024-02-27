import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    name: { type: String },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    role: { type: String, default: "user" },
  },
  { timestamps: true }
);

const Users = mongoose.model("Users", userSchema);

export default Users;
