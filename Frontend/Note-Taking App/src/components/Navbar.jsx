import React from 'react'
import { Plus } from 'lucide-react';
import { Link } from 'react-router';
const Navbar = () => {
  return (
    <div className='bg-base-300 border-b border-base-content/10'>
        <div className='max-auto max-w-screen p-4 '>
            <div className='flex items-center justify-between'>
                <h1 className='text-2xl font-bold text-green'>ThinkBoard</h1>
                <Link to={"/create"}>
            <button className="btn btn-success rounded-3xl"><Plus size={15}/> New Note</button>
                </Link>
            </div>
        </div>
    </div>
  )
}

export default Navbar