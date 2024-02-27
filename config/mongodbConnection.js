import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();
mongoose.connect(process.env.MONGODB_URI);

const db = mongoose.connection;

db.on("error", (err) => console.log("Error", err));

db.on("connected",(err,res)=>{
    console.log("Connected to MongoDB");
})