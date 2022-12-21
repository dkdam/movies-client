import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios'
import Movies from './components/Movies'

const URL = "http://http://localhost:3000/api/v1/movies"

const getApiData = () => {
  return axios.get(URL).then((res) => res.data)
}

function App() {
  
  const [movies, setMovies] = useState([])

  useEffect(() => {
    let mounted = true
    getApiData().then((items) => {
      if (mounted) {
        setMovies(items)
      }
    })
    return () => (mounted = false)
  },[])


  return (
    <div className="App">
      <h1>Hello You</h1>
      <Movies movies = {movies} />
    </div>
  )
}

export default App
