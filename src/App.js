import React, { useState, useEffect } from 'react'
import ImageCard from './components/ImageCard'
import ImageSearch from './components/ImageSearch'

function App() {
  const [images, setImages] = useState([])
  const [loading, setLoading] = useState(true)
  const [term, setTerm] = useState('')

  const searchText = () => {
    fetch(
      `https://pixabay.com/api/?key=${process.env.REACT_APP_PIXABAY_API_KEY}&q=${term}&image_type=photo&pretty=true`
    )
      .then(res => res.json())
      .then(data => {
        setLoading(false)
        setImages(data.hits)
      })
      .catch(err => console.log(err))
  }

  useEffect(() => {
    searchText()
  }, [])

  return (
    <div className="container mx-auto">
      <ImageSearch term={term} setTerm={setTerm} searchText={searchText} />
      {!loading && images.length === 0 && (
        <h2 className="mx-auto mt-3 text-center">No Image Found</h2>
	)}
      {loading ? (
        <h1 className="mx-auto mt-3 text-6xl text-center">Loading...</h1>
      ) : (
        <div className="grid grid-cols-3 ga4">
          {images.map(image => (
            <ImageCard key={image.id} image={image} />
          ))}
        </div>
      )}
    </div>
  )
}

export default App
