import React from 'react'
import { ArrowLeft, Trash2 } from 'lucide-react';
import { Link, useNavigate } from 'react-router';
import { useParams } from 'react-router'
import axios from 'axios';
import { useState } from 'react';
import { useEffect } from 'react';
import {toast} from 'react-hot-toast'
const EditNote = () => {
  const navigate = useNavigate();
const {id} = useParams();
const[title,settitle] = useState("")
const[content,setcontent] = useState('')
async function updateNote(){
    try {
        await axios.put(`https://thinkboard-1kxy.onrender.com/api/notes/${id}`,{title,content},{new:true});
        navigate("/")
        toast.success("Notes Updated")
    } catch (error) {
        console.log(error);
        
    }
}

async function DeleteNotes(){
    try {
        await axios.delete(`http://localhost:6801/api/notes/${id}`);
        navigate("/")
        toast.success("Notes deleted")
    } catch (error) {
        console.log(error);
    }
}
 useEffect(()=>{
        async function fetchNotes(){
            try {
                const res = await axios.get(`http://localhost:6801/api/notes/${id}`)
                settitle(res.data.title)
                setcontent(res.data.content)
            } catch (error) {
                console.log(error);
            }
        }
        fetchNotes()
    },[id])

  return (
    <div className="min-h-screen bg-black text-white p-6 flex flex-col items-center">
      {/* Top Navigation */}
      <div className="w-full max-w-2xl flex justify-between items-center mb-6">
        <Link to={"/"}>
        <button className="flex items-center gap-2 text-sm font-semibold hover:underline">
          <ArrowLeft size={16} />
          Back to Notes
        </button>
        </Link>
        <button className="btn btn-outline btn-error flex items-center gap-2" onClick={()=>{DeleteNotes()}}>
          <Trash2 size={16} />
          Delete Note
        </button>
      </div>

      {/* Edit Note Form */}
      <div className="bg-neutral p-6 rounded-lg w-full max-w-2xl shadow-lg">
        {/* Title */}
        <div className="mb-4">
          <label className="block text-sm font-semibold mb-1">Title</label>
          <input
            type="text"
            placeholder="Enter title"
            className="input input-bordered w-full text-white bg-black"
            onChange={(e)=>{settitle(e.target.value)}}
            value={title}
          />
        </div>

        {/* Content */}
        <div className="mb-6">
          <label className="block text-sm font-semibold mb-1">Content</label>
          <textarea
            className="textarea textarea-bordered w-full text-white bg-black"
            rows="4"
            placeholder="Enter content"
            onChange={(e)=>{setcontent(e.target.value)}}
            value={content}
          ></textarea>
        </div>

        {/* Save Button */}
        <div className="text-right">
        
          <button className="btn bg-green-500 hover:bg-green-600 text-white" onClick={()=>updateNote()}>
            Save Changes
          </button>
        
        </div>
      </div>
    </div>
  )
}

export default EditNote
