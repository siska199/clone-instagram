import Image from 'next/image'
import React from 'react'
import Feed from '../Feed/Feed'

const StoryIcon = ({ size, url, username, info, side, feed, user }) => {
  let width = ''
  let height = ''

  switch (size) {
    case 'large':
      width = 'w-[4.5rem]'
      height = 'h-[4.5rem]'
      break
    case 'medium':
      width = 'w-16'
      height = 'h-16'
      break
    case 'small':
      width = 'w-[2.5rem]'
      height = 'h-[2.5rem]'

      break
  }

  return (
    <div className={`${size == 'medium' ? '' : 'flex items-center gap-2'}`}>
      <img
        className={`cursor-pointer border-[0.2rem] border-red-500 p-[1.5px] ${
          side && '!border-[0.05rem] !border-gray-300 !p-0'
        } ${
          user && '!border-gray-300 p-[1.5px]'
        } ${width} ${height} rounded-full object-cover `}
        src={url}
      />
      {size == 'medium' && (
        <p className={` ${width} truncate text-center text-xs`}>{username}</p>
      )}
      {feed && <h5 className="font-semibold">{username}</h5>}
      {user && (
        <div>
          <h5 className="font-semibold">{username}</h5>
          <p className="font-medium text-gray-600">{info}</p>
        </div>
      )}
      {side && (
        <div>
          <h5 className="font-semibold">{username}</h5>
          <p className="text-xs text-gray-500">{info}</p>
        </div>
      )}
    </div>
  )
}

export default StoryIcon
