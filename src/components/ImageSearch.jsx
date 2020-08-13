import React from 'react'

const ImageSearch = ({ term, setTerm, searchText }) => {
  const handleSubmit = e => {
    e.preventDefault()
    searchText()
  }

  return (
    <div className="max-w-sm mx-auto my-10 overflow-hidden rounded">
      <form onSubmit={handleSubmit} className="w-full max-w-sm">
        <div className="flex items-center py-2 border-b border-b-2 border-teal-500">
          <input
            onChange={e => setTerm(e.target.value)}
            className="w-full px-2 py-1 mr-3 leading-tight text-gray-700 bg-transparent border-none appearance-none focus:outline-none"
            type="text"
            placeholder="Search Image Term..."
            value={term}
          />
          <button
            className="flex-shrink-0 px-2 py-1 text-sm text-white bg-teal-500 border-4 border-teal-500 rounded hover:bg-teal-700 hover:border-teal-700"
            type="submit"
          >
            Search
          </button>
        </div>
      </form>
    </div>
  )
}

export default ImageSearch
