import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import SearchBar from './Day5/components/SearchBar'
import searchImages from './Day5/api'
import ImageList from './Day5/components/ImageList'


function App() {

  //DAY 5

  const[images, setImages] = useState([])

  const handleSubmit = async (term) => {
    console.log('Do a search with ,'+ term)
    const result = await searchImages(term);
    setImages(result)
    
  }

  return (
    <div>
      <SearchBar onSubmit={handleSubmit}/>   
      <ImageList images={images}/>
    </div>
  )
}

export default App
