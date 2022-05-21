import React from 'react'
import { CgProfile } from 'react-icons/cg'
import { BsBookmark } from 'react-icons/bs'
import { FiSettings } from 'react-icons/fi'
import { GrSync } from 'react-icons/gr'
import Link from 'next/link'
import { signOut } from 'next-auth/react'

const Dropdown = () => {
  const menuDropdown = [
    {
      name: 'Profile',
      icon: <CgProfile />,
      url: '/profile',
    },
    {
      name: 'Saved',
      icon: <BsBookmark />,
      url: '/saved',
    },
    {
      name: 'Settings',
      icon: <FiSettings />,
      url: '/settings',
    },
    {
      name: 'Switch Accounts',
      icon: <GrSync />,
      url: '/switch-accounts',
    },
  ]
  return (
    <div className="absolute top-10 right-0 z-10 w-44 divide-y divide-gray-100 rounded border-2 bg-white shadow-lg">
      <ul className="text-md py-1 ">
        {menuDropdown.map((menu, i) => (
          <li key={i}>
            <Link href={menu.url}>
              <a className="flex items-center gap-2 px-4 py-2 hover:bg-gray-200">
                {menu.icon}
                {menu.name}
              </a>
            </Link>
          </li>
        ))}
      </ul>

      <div className="py-1">
        <a
          onClick={() => signOut({ callbackUrl: '/' })}
          className="text-md block cursor-pointer px-4 py-2  hover:bg-gray-200"
        >
          Sign Out
        </a>
      </div>
    </div>
  )
}
export default Dropdown
