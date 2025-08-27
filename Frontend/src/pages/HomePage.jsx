import React from 'react'
import Navbar from '../components/Navbar'
import RateLimit from '../components/RateLimit'
import Notes from '../components/Notes'
import { useState } from 'react'
import { useEffect } from 'react'
import axios from 'axios'
import toast from 'react-hot-toast'
 
const HomePage = () => {
    const [isRatelimited,setisRatelimited] = useState(false);
    // const[loading,setloading] = useState(false);
    const[notes,setnotes] = useState([])
    useEffect(()=>{
        async function fetchNotes(){
            try {
                const res = await axios.get("https://thinkboard-1kxy.onrender.com/api/notes")
                setnotes(res.data)
                setisRatelimited(false)
                // console.log(notes);  
            } catch (error) {
                console.log(error);
                if(error.response.status === 429){
                    setisRatelimited(true)
                }
                else{
                    toast.error("Error fecthing data")
                }
            }
        }
        fetchNotes()
    },[])
    // useEffect(()=>{
    //     console.log(notes);
        
    // },[notes])
 let content;
if (isRatelimited) {
  content = <RateLimit />;
} else if (notes.length > 0) {
  content = <Notes notes={notes} />;
} else {
  content = <p className="text-white text-center">No notes found.</p>;
}

return (
  <div className="min-h-screen">
    <Navbar />
    {content}
  </div>
);

  
}

export default HomePage