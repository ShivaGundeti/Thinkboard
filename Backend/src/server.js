import express from "express";
import notesroutes from "../src/routes/notesroutes.js";
import {connectDB} from './config/db.js'
import dotenv from 'dotenv'
import rateLimiter from "./middleware/ratelimiter.js";
import cors from 'cors'
dotenv.config()
const app = express();
app.use(cors())
app.use(express.json())
app.use(rateLimiter)
// const PORT = process.env.PORT || 5001;

app.use("/api/notes",notesroutes)
connectDB().then(()=>{
app.listen(6801,()=>{
console.log(`✅ Server started running on port`);
})
})



