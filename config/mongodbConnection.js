import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const dbUri = process.env.MONGODB_URI;
const dbName = process.env.DB_NAME;

if (!dbUri || !dbName) {
  throw `db connection failed: MONGODB_URI or DB_NAME is empty`;
}
console.log("[+] connecting to mongo db:", dbUri);
await mongoose.connect(dbUri, { dbName });
const db = mongoose.connection;

db.on("error", (err) => console.log("Error", err));

db.on("connected", (err, res) => {
  console.log("Connected to MongoDB");
});
