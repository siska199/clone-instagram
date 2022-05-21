import React, { useState, useEffect } from 'react'
import Feeds from '../components/Feed/Feeds'
import ModalUploadPost from '../components/Modal/ModalUploadPost'
import Navbar from '../components/Navbar/Navbar'
import SideInfo from '../components/SideInfo/SideInfo'
import Stories from '../components/Stories/Stories'
import { faker } from '@faker-js/faker'

const homepage = () => {
  const [open, setOpen] = useState(false)

  //Create fake data storie of fiend
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
    <div>
      <Navbar setOpen={setOpen} />

      <main className="container my-3 flex flex-shrink justify-between gap-8 ">
        <section className="w-[100%] md:w-[60%]">
          <Stories stories={stories} bg={true} size="medium" />
          <Feeds />
        </section>
        <SideInfo />
      </main>
      {open && <ModalUploadPost setOpen={setOpen} />}
    </div>
  )
}
homepage.auth = true
export default homepage
