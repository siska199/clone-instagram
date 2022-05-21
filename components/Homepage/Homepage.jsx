import { useState, useEffect } from 'react'
import Feeds from '../Feed/Feeds'
import ModalUploadPost from '../Modal/ModalUploadPost'
import Navbar from '../Navbar/Navbar'
import SideInfo from '../SideInfo/SideInfo'
import Stories from '../Stories/Stories'
import { faker } from '@faker-js/faker'

const Homepage = () => {
  const [open, setOpen] = useState(false)

  //Create fake data storie of fiend
  const [stories, setStories] = useState(false)
  useEffect(() => {
    const suggestion = [...Array(20)].map((_, i) => ({
      id: i,
      username: 'siska199',
      name: 'Siska Apriana Rifianti',
      url: 'https://i.pinimg.com/564x/10/58/9f/10589fdab54694b819c976130325121d.jpg',
    }))
    setStories(suggestion)
  }, [])

  return (
    <div>
      <Navbar setOpen={setOpen} />
      <main className="container my-3 flex flex-shrink justify-between gap-8 ">
        <section className="w-[100%] md:w-[57%]">
          <Stories stories={stories} bg={true} size="medium" />
          <Feeds />
        </section>
        <SideInfo />
      </main>
      {open && <ModalUploadPost setOpen={setOpen} />}
    </div>
  )
}

export default Homepage
