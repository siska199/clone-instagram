import React, { useEffect, useState } from 'react'
import { faker } from '@faker-js/faker'
import StoryIcon from '../StoryIcon/StoryIcon'
import { useSession } from 'next-auth/react'

const SideInfo = () => {
  const [suggests, setSuggets] = useState([])
  useEffect(() => {
    const fakeSuggests = [...Array(5)].map((_, i) => ({
      id: i,
      username: faker.name.firstName(true),
      url: faker.image.avatar(true),
      info: 'Follow by siska_ar + 3 more',
    }))
    setSuggets(fakeSuggests)
  }, [])

  const { data: session } = useSession()

  return (
    <div className="!sticky top-[7rem] h-[50%] p-4 ">
      <div className="mb-[1.5rem] flex gap-[3rem]">
        <StoryIcon
          url={session.user.image}
          size="large"
          username={session.user.username}
          user={true}
          info={session.user.name}
        />
        <button className="text-sm font-medium text-sky-500/100">
          Add Story
        </button>
      </div>
      <div>
        <header className="mb-3 flex items-center justify-between ">
          <h3 className="font-semibold text-gray-500">Suggestion For You</h3>
          <button className="text-sm font-medium ">See Alll</button>
        </header>
        <section className="space-y-3">
          {suggests.map((data, i) => (
            <div key={i} className="flex items-center justify-between">
              <StoryIcon
                size={'small'}
                url={data.url}
                username={data.username}
                info={data.info}
                side={true}
              />
              <button className="text-sm font-medium text-sky-500/100 ">
                Follow
              </button>
            </div>
          ))}
        </section>
      </div>
    </div>
  )
}
export default SideInfo
