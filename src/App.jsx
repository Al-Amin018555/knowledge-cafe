import { useState } from 'react'
import './App.css'
import Header from './components/Header/Header'
import Blogs from './components/Blogs/Blogs'
import Bookmarks from './components/Bookmarks/Bookmarks'

function App() {
  const [bookmarks,setBookMarks] = useState([]);
  
  const handleAddToBookMarks = blog => {
    console.log('book mark clicked');
  }

  return (
    <div className='max-w-7xl mx-auto'>
      <Header></Header>
      <div className='md:flex justify-between'>
        <Blogs handleAddToBookMarks={handleAddToBookMarks}></Blogs>
        <Bookmarks></Bookmarks>
      </div>

    </div>
  )
}

export default App
