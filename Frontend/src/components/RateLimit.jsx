import React from 'react'
import { ServerCrash } from 'lucide-react';
const RateLimit = () => {
  return (
   <div className='flex items-center justify-center mt-7'>
     <div className="card md:w-100 w-70 bg-base-200 card-sm shadow-sm">
  <div className="card-body flex flex-row gap-4">
    <ServerCrash size={90}/>
   <div className='flex flex-col gap-2'>
     <h2 className="card-title">Rate Limit Reached</h2>
    <h2>You've made too many request in a short period of time. Please wait a moment</h2>
    <p>Try again in few seconds for the best experience</p>
   </div>
  </div>
</div>
   </div>
  )
}

export default RateLimit