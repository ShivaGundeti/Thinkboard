import React, { useState } from 'react';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router';
import axios from 'axios';
import toast from 'react-hot-toast';

const CreateNote = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handleCreate = async () => {
    console.log({ title, content });
   try {
     const res = await axios.post("http://localhost:6801/api/notes/",{title,content});
     console.log(res);
     toast.success("Created notes")
   } catch (error) {
    console.log(error);
    
   }
    
    
  };



  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center p-6">
      {/* Top Navigation */}
      <div className="w-full max-w-2xl mb-6 flex items-center">
        <Link to="/" className="flex items-center text-sm font-semibold hover:underline">
          <ArrowLeft size={16} className="mr-1" />
          Back to Notes
        </Link>
      </div>

      {/* Form Container */}
      <div className="bg-neutral p-6 rounded-lg w-full max-w-2xl shadow-lg">
        <h2 className="text-2xl font-bold mb-6">Create New Note</h2>

        {/* Title Field */}
        <div className="mb-4">
          <label className="block text-sm font-semibold mb-1">Title</label>
          <input
            type="text"
            placeholder="Note title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="input input-bordered w-full bg-black text-white rounded-full px-4 py-2"
          />
        </div>

        {/* Content Field */}
        <div className="mb-6">
          <label className="block text-sm font-semibold mb-1">Content</label>
          <textarea
            rows="5"
            placeholder="Write your note here..."
            value={content}
            onChange={(e) => setContent(e.target.value)}
            className="textarea textarea-bordered w-full bg-black text-white rounded-2xl px-4 py-2"
          ></textarea>
        </div>

        {/* Create Button */}
        <div className="text-right">
          <button
            className="bg-green-500 hover:bg-green-600 text-white font-semibold px-6 py-2 rounded-full"
            onClick={handleCreate}
          >
            Create Note
          </button>
        </div>
      </div>
    </div>
  );
};

export default CreateNote;
