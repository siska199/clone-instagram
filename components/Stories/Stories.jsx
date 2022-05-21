import React, { useEffect, useState } from 'react'
import StoryIcon from '../StoryIcon/StoryIcon'
import { faker } from '@faker-js/faker'

const Stories = () => {
  const [stories, setStories] = useState(false)
  useEffect(() => {
    const suggestion = [...Array(20)].map((_, i) => ({
      id: i,
      username: faker.name.firstName(true),
      name: faker.name.firstName(true),
      url: faker.image.avatar(true),
    }))
    setStories(suggestion)
  }, [])

  return (
    <div className="p-4 overflow-x-scroll scrollbar-thin flex space-x-4 border-2 border-gray-200 bg-white">
      {stories &&
        stories.map((data, i) => (
          <StoryIcon
            key={i}
            size="medium"
            url={data.url}
            username={data.username}
          />
        ))}
    </div>
  )
}

export default Stories
