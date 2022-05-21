import React from 'react'
import { BsEmojiSmile } from 'react-icons/bs'
export const AddComment = () => {
  return (
    <div className="flex justify-between space-x-2 border-t-2 p-3">
      <BsEmojiSmile className='text-[1.5rem]' />
      <input className="bg-white outline-none w-full" placeholder='Add comment...' />
      <button className='text-[#385185] disabled:opacity-60 font-bold' disabled>Post</button>
    </div>
  )
}
