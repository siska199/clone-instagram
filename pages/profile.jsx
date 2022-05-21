import { useSession } from 'next-auth/react'
import React, { useState, useEffect } from 'react'
import Navbar from '../components/Navbar/Navbar'
import Stories from '../components/Stories/Stories'
import { FiSettings } from 'react-icons/fi'
import { BsGrid3X3 } from 'react-icons/bs'
import { BsBookmark } from 'react-icons/bs'
import { BiUserPin } from 'react-icons/bi'
import Head from 'next/head'
import { collection, getDocs, onSnapshot,query,orderBy } from 'firebase/firestore'
import { db } from '../firebase.config'

const profile = () => {
  const { data: session } = useSession()
  //Create fake data storie of fiend
  const [stories, setStories] = useState(false)
  useEffect(() => {
    const suggestion = [...Array(20)].map((_, i) => ({
      id: i,
      username: "siska199",
      name: "Siska Apriana Rifianti",
      url: 'https://i.pinimg.com/564x/10/58/9f/10589fdab54694b819c976130325121d.jpg',
    }))
    setStories(suggestion)
  }, [])

  const saved = [
    'https://i.pinimg.com/564x/10/58/9f/10589fdab54694b819c976130325121d.jpg',
    'https://i.pinimg.com/564x/20/3e/e4/203ee433c7ae235b5090f056e7cb77bc.jpg',
    'https://i.pinimg.com/736x/65/43/ab/6543ab6802e9428e2068cfe1cd9d9940.jpg',
  ]
  const tagged = [
    'https://i.pinimg.com/736x/76/6f/e1/766fe1add8e01f6da80b2abdbbb36b00.jpg',
    'https://i.pinimg.com/564x/3f/3a/5c/3f3a5c4870e66601b37c417d825ec8e4.jpg',
    'https://i.pinimg.com/564x/4a/5c/e7/4a5ce78b60d097bcebb1ce4518060364.jpg',
  ]

  const [images, setImages] = useState([])
  const [activePhotoSection, setActivePhotoSection] = useState('posts')
  useEffect(() => {
    const unsub = onSnapshot(
      query(collection(db, 'posts'), orderBy('timestamp', 'desc')),
      (snap) => {
        let data = []
        snap.docs.forEach((doc) => {
          data.push(doc.data().imagePost)
        })
        setImages(data)
      }
    )
    return () => unsub
  }, [db])

  const handleActivePhotoSection = async (photoSection) => {
    setActivePhotoSection(photoSection)
    let data = []
    switch (photoSection) {
      case 'posts':
        const querySnapshot = await getDocs(query(collection(db, 'posts'), orderBy('timestamp', 'desc')))
        querySnapshot.forEach((doc) => {
          data.push(doc.data().imagePost)
          console.log(doc.data().imagePost)
        })
        setImages(data)
        break
      case 'saved':
        setImages(saved)
        break
      case 'tagged':
        setImages(tagged)
        break
    }
  }

  return (
    <div>
      <Head>
        <title>{session.user.name}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <main className="container flex flex-col justify-center">
        {/* Profile Info */}
        <section className="mt-6 flex items-center space-x-2 md:space-x-10 md:px-[10rem] ">
          <img
            className="h-[6rem] rounded-full  border-2 md:h-[10rem]"
            src={session?.user.image}
            alt=""
          />
          <div className="flex flex-col gap-5">
            <section className="flex items-center gap-4">
              <h1 className="text-[1.4rem] font-thin md:text-[2rem]">
                {session?.user.username}
              </h1>
              <button className="rounded-md border-2 px-2 py-1 font-medium">
                Edit Profile
              </button>
              <FiSettings className="text-[1.5rem]" />
            </section>
            <section className="flex gap-4 text-[0.9rem]">
              <p>
                <span className="font-semibold">45M</span> followers
              </p>
              <p>
                <span className="font-semibold">3</span> posts
              </p>
              <p>
                <span className="font-semibold">48</span> following
              </p>
            </section>
            <section className="text-[1rem]">
              <h1 className="font-semibold">{session?.user.name}</h1>
              <p>Diary of learning english</p>
            </section>
          </div>
        </section>

        <section className="m-2 md:m-[4rem]">
          <Stories stories={stories} size="myStory" />
        </section>

        <section className="justify-center border-t-2 border-gray-400">
          <ul className=" flex justify-center gap-[2rem]  tracking-[3px] text-gray-400 ">
            <li
              onClick={() => handleActivePhotoSection('posts')}
              className={`${
                activePhotoSection == 'posts' &&
                ' border-t-2 border-t-black py-6 text-black'
              } photo-section`}
            >
              <BsGrid3X3 />
              POSTS
            </li>
            <li
              onClick={() => handleActivePhotoSection('saved')}
              className={`${
                activePhotoSection == 'saved' &&
                'border-t-2 border-t-black py-6 text-black'
              } photo-section`}
            >
              <BsBookmark />
              SAVED
            </li>
            <li
              onClick={() => handleActivePhotoSection('tagged')}
              className={`${
                activePhotoSection == 'tagged' &&
                ' border-t-2 border-t-black py-6 text-black'
              } photo-section`}
            >
              <BiUserPin />
              TAGED
            </li>
          </ul>

          <div className="flex flex-shrink flex-wrap justify-center gap-3">
            {images.map((img, i) => (
              <div key={i}>
                <img
                  src={img}
                  className="h-[8rem] w-[8rem] border-2 object-contain md:h-[20rem] md:w-[20rem]"
                />
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  )
}
profile.auth = true
export default profile
