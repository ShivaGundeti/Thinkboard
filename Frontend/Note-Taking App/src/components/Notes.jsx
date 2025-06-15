import React from 'react'
import { SquarePen, Trash2 } from 'lucide-react'
import { Link } from 'react-router'

const Notes = ({ notes }) => {
  return (
    <div className='mx-auto p-5 bg-black min-h-screen'>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:mx-25">
        {notes.map((note, i) => (
          <Link to={`Notes/${note._id}`} key={i}>
            <div className="card bg-neutral text-white border-t-4 border-t-green-400 w-full p-5 rounded-md shadow-md">
              <div className="note-details flex-col">
                <div className="title font-bold text-lg">{note.title}</div>
                <div className="content text-sm mt-3">{note.content}</div>
              </div>
              <div className="note-items flex justify-between text-sm mt-5">
                <p> {new Date(note.createdAt).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    })}</p>
                <div className="buttons flex flex-row items-center gap-2">
                  <SquarePen size={18} />
                  <Trash2 size={18} color='red' />
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default Notes
