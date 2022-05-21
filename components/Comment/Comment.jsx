import React from 'react'
import { BsSuitHeart } from 'react-icons/bs'

const Comment = ({ data }) => {
  return (
    <div className="flex justify-between items-center py-3">
      <div className='flex items-center'>
        <img className="h-[2rem] w-[2rem] rounded-full mr-3" src={data.url} alt="" />
        <div className="text-gray space-y-1">
          <p className='font-bold'>
            {data.username}
            <span className="ml-2 font-normal">{data.comment}</span>
          </p>
          <p className='text-gray-400 text-[0.8rem]'>
            3m <span className='ml-2 font-semibold cursor-pointer'>Reply</span>
          </p>
        </div>
      </div>

      <BsSuitHeart className="cursor-pointer" />
    </div>
  )
}
export default Comment
