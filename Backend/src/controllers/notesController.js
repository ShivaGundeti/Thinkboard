import Note from '../model/Notes.js'
export async function getAllnotes(req,res){
    try {
        const notes = await Note.find().sort({createdAt:-1});
        res.status(200).json(notes)
    } catch (error) {
        console.log("Error in getNotes",error);
        res.status(500).json({message: "internal error"})
    }
}

export async function CreateNotes(req,res){
    try {
        const{title,content} = req.body;
        const newNote = new Note({title,content})
        console.log("~🚀~",title,content);
        await newNote.save();
        res.status(201).json({message:"Notes created"})
    } catch (error) {
        console.log("Error in create",error);
        res.status(500).json({message: "internal error"})
    }
}

export async function UpdateNotes(req,res){
    try {
        const {id} = req.params;
        const { title, content } = req.body;
        
        const updateNote = await Note.findByIdAndUpdate(id,{ title, content },{ new: true });
        if(!updateNote) {
           res.status(404).json({message:"Notes not found"});
            
        }
        res.status(200).json({message:"Notes updated"});
      
    } catch (error) {
         console.log("Error in update",error);
        res.status(500).json({message: "internal error"})
    }
}

export async function DeleteNotes(req,res){
    try {
        const {id} = req.params;
        const Deletnotes = await Note.findByIdAndDelete(id);
        if(!Deletnotes) {
           res.status(404).json({message:"Notes not found"});
            
        }
         res.status(200).json({message:"deleted notes"});
    } catch (error) {
        console.log("Error in update",error);
        res.status(500).json({message: "internal error"})
    }
}

export async function getNoteByid(req,res){
    try {
        const {id} = req.params;
        const oneNote = await Note.findById(id);
        if(!oneNote){
            res.status(404).json({message: "Notes not found"})
        }
        res.status(200).json(oneNote)
    } catch (error) {
         res.status(404).json({message: "Notes not found"})
    }
}