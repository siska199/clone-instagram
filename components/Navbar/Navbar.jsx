import React, { useState } from 'react'
import { BsSearch } from 'react-icons/bs'
import { AiFillHome } from 'react-icons/ai'
import { RiMessengerLine } from 'react-icons/ri'
import { AiOutlinePlusSquare } from 'react-icons/ai'
import { AiOutlineCompass } from 'react-icons/ai'
import { GiSelfLove } from 'react-icons/gi'
import { useSession, signIn } from 'next-auth/react'
import Dropdown from '../Dropdown/Dropdown'
import Link from 'next/link'

const Navbar = ({ setOpen }) => {
  const { data: session } = useSession()
  const [openDropdown, setOpenDropdown] = useState(false)

  const icons = [
    {
      name: 'home',
      icon: <AiFillHome />,
      url: '/',
    },
    {
      name: 'inbox',
      icon: <RiMessengerLine />,
      url: '/inbox',
    },
    {
      name: 'posts',
      icon: <AiOutlinePlusSquare onClick={() => setOpen(true)} />,
      notUrl: true,
    },
    {
      name: 'explorer',
      icon: <AiOutlineCompass />,
      url: '/explorer',
    },
    {
      name: 'love',
      icon: <GiSelfLove />,
      notUrl: true,
    },
  ]

  return (
    <header className="sticky top-0 z-50 border-2 bg-white">
      <nav className="container flex items-center justify-between">
        <div>
          <Link href="/">
            <a className='font-["Billabong"] text-[1.5rem] md:text-[2.3rem]'>
              Instagram
            </a>
          </Link>
        </div>
        <div className="hidden w-[20rem] rounded-md border-2 bg-[#efefef] p-2 md:flex">
          <BsSearch className="text-[1.2rem] text-gray-600 " />
          <input
            className="mx-3 h-[100%] w-full bg-[#efefef] outline-none placeholder:text-[1.2rem]"
            placeholder="Search"
          />
        </div>
        <ul className="flex items-center gap-2 md:gap-4 ">
          {icons.map((data, i) => (
            <li className="cursor-pointer text-[1.5rem] md:text-[2rem]" key={i}>
              {data.notUrl ? (
                <a>{data.icon}</a>
              ) : (
                <Link href={data.url}>
                  <a>{data.icon}</a>
                </Link>
              )}
            </li>
          ))}
          {session ? (
            <div className="relative">
              <img
                src={session?.user?.image}
                className="h-[1.8rem] w-[1.8rem] cursor-pointer rounded-full border-2 object-cover sm:h-[2rem] sm:w-[2rem]"
                alt=""
                onClick={() => setOpenDropdown(!openDropdown)}
              />
              {openDropdown && <Dropdown />}
            </div>
          ) : (
            <button onClick={() => signIn()}>Sign In</button>
          )}
        </ul>
      </nav>
    </header>
  )
}

export default Navbar
