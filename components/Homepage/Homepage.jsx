import { useState, useEffect } from 'react'
import Feeds from '../Feed/Feeds'
import ModalUploadPost from '../Modal/ModalUploadPost'
import Navbar from '../Navbar/Navbar'
import SideInfo from '../SideInfo/SideInfo'
import Stories from '../Stories/Stories'

import {dataStories as stories} from "../../lib/data"

const Homepage = () => {
  const [open, setOpen] = useState(false)

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
