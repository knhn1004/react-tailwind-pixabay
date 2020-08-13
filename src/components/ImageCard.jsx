import React from 'react'

const ImageCard = ({
  image: { webformatURL, user, views, downloads, likes, tags },
}) => {
  tags = tags.split(',')

  return (
    <div className="max-w-sm mb-5 overflow-hidden rounded shadow-lg">
      <img className="w-full" src={webformatURL} alt="" />
      <div className="px-6 py-4">
        <div className="text-xl font-bold text-purple-500 mb">
          Photo by {user}
        </div>
        <ul>
          <li>
            <strong>Views: </strong>
            {views}
          </li>
          <li>
            <strong>Downloads: </strong>
            {downloads}
          </li>
          <li>
            <strong>Likes: </strong>
            {likes}
          </li>
        </ul>
      </div>
      <div className="px-6 py-4">
        {tags.map(tag => (
          <span
            className="inline-block px-3 py-1 mr-2 text-sm font-semibold text-gray-700 bg-gray-200 rounded-full"
            key={tag}
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  )
}

export default ImageCard
