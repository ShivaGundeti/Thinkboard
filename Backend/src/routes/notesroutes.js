import express from 'express';
import { CreateNotes, DeleteNotes, getAllnotes, UpdateNotes,getNoteByid } from "../controllers/notesController.js"
const router = express.Router();

router.get("/",getAllnotes)
router.get("/:id",getNoteByid)
router.post("/",CreateNotes)
router.put('/:id',UpdateNotes);
router.delete('/:id',DeleteNotes);

export default router;

