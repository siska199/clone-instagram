import React from 'react'
import { BsSearch } from 'react-icons/bs'
import { AiFillHome } from 'react-icons/ai'
import { RiMessengerLine } from 'react-icons/ri'
import { AiOutlinePlusSquare } from 'react-icons/ai'
import { AiOutlineCompass } from 'react-icons/ai'
import { GiSelfLove } from 'react-icons/gi'
import { useSession, signIn, signOut } from 'next-auth/react'

const Navbar = ({setOpen}) => {
  const url =
    'https://static.remove.bg/remove-bg-web/7deb868fb894efaa6d5f6cbfd1a016f4a613fda9/assets/start_remove-c851bdf8d3127a24e2d137a55b1b427378cd17385b01aec6e59d5d4b5f39d2ec.png'
  const { data: session } = useSession()
  console.log('data: ', session)
  const icons = [
    <AiFillHome />,
    <RiMessengerLine />,
    <AiOutlinePlusSquare onClick={()=>setOpen(true)}/>,
    <AiOutlineCompass />,
    <GiSelfLove />,
  ]

  return (
    <header className="sticky z-50 top-0 border-2 bg-white">
      <nav className="container flex items-center justify-between">
        <div>
          <h1 className='font-["Billabong"] text-[1.5rem] md:text-[2.3rem]'>
            Instagram
          </h1>
        </div>
        <div className="hidden w-[20rem] rounded-md border-2 bg-[#efefef] p-2 md:flex">
          <BsSearch className="text-[1.2rem] text-gray-600 " />
          <input
            className="mx-3 h-[100%] w-full bg-[#efefef] outline-none placeholder:text-[1.2rem]"
            placeholder="Search"
          />
        </div>
        <ul className="flex items-center gap-2 md:gap-4 ">
          {icons.map((icon, i) => (
            <li className="cursor-pointer text-[1.5rem] md:text-[2rem]" key={i}>
              {icon}
            </li>
          ))}
          {session ? (
            <img
              src={session?.user?.image}
              className="h-[1.8rem] w-[1.8rem] cursor-pointer rounded-full border-2 object-cover sm:h-[2rem] sm:w-[2rem]"
              alt=""
              onClick={() => signOut()}
            />
          ) : (
            <button onClick={() => signIn()}>Sign In</button>
          )}
        </ul>
      </nav>
    </header>
  )
}

export default Navbar
