import React from 'react'
import {Routes,Route} from 'react-router'
import HomePage from './pages/HomePage'
import CreatePage from './pages/CreatePage'
import NoteDetail from './pages/NoteDetail'
// import toast from 'react-hot-toast'
const App = () => {
  return (
  <div>
      <Routes>
      <Route path='/' element={<HomePage/>}/>
      <Route path='/create' element={<CreatePage/>}/>
      <Route path='/Notes/:id' element={<NoteDetail/>}/>
    </Routes>
  </div>
  )
}

export default App