import React, { useState } from 'react'
import Feeds from '../components/Feed/Feeds'
import ModalUploadPost from '../components/Modal/ModalUploadPost'
import Navbar from '../components/Navbar/Navbar'
import SideInfo from '../components/SideInfo/SideInfo'
import Stories from '../components/Stories/Stories'

const Homepage = () => {
  const [open, setOpen] = useState(false)
  return (
    <div>
      <Navbar setOpen={setOpen} />

      <main className="container my-3 flex flex-shrink justify-between gap-8 ">
        <section className="w-[100%] md:w-[60%]">
          <Stories />
          <Feeds />
        </section>
        <SideInfo />
      </main>
      {open && <ModalUploadPost setOpen={setOpen} />}
    </div>
  )
}
export default Homepage
