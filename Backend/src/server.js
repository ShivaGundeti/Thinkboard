import express from "express";
import dotenv from "dotenv";
// import path from "path";
import cors from "cors";
import { connectDB } from "./config/db.js";
import notesroutes from "./routes/notesroutes.js";
import rateLimiter from "./middleware/ratelimiter.js";

dotenv.config();

const app = express();

app.use(cors())
app.use(express.json());
app.use(rateLimiter);



app.use("/api/notes", notesroutes);

connectDB().then(() => {
  app.listen(6801, () => {
    console.log("✅ Server running on http://localhost:6801");
  });
});
