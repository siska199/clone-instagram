import React from 'react'
import StoryIcon from '../StoryIcon/StoryIcon'

const Stories = ({stories, bg,size}) => {

  return (
    <div className={`p-4 overflow-x-scroll scrollbar-thin flex space-x-4 border-gray-200  ${bg&&"bg-white border-2"}`}>
      {stories&&
        stories.map((data, i) => (
          <StoryIcon
            key={i}
            size={size}
            url={data.url}
            username={data.username}
          />
        ))}
    </div>
  )
}

export default Stories
