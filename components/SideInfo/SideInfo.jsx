import React, { useEffect, useState } from 'react'
import { faker } from '@faker-js/faker'
import StoryIcon from '../StoryIcon/StoryIcon'

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
  const url =
    'https://static.remove.bg/remove-bg-web/7deb868fb894efaa6d5f6cbfd1a016f4a613fda9/assets/start_remove-c851bdf8d3127a24e2d137a55b1b427378cd17385b01aec6e59d5d4b5f39d2ec.png'

  return (
    <div className="!sticky top-[7rem] h-[50%] p-4 ">
      <div className="mb-[1.5rem] flex gap-[3rem]">
        <StoryIcon
          url={url}
          size="large"
          username="siska199"
          user={true}
          info="Siska Apriana Rifianti"
        />
        <button className="text-sm font-medium text-sky-500/100">Switch</button>
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
