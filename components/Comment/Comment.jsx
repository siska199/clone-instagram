import React, { useState } from 'react'
import { BsSuitHeart } from 'react-icons/bs'
import { HiOutlineDotsHorizontal } from 'react-icons/hi'
import Moment from 'react-moment'
const Comment = ({ data }) => {
  const [showDotTree, setShowDotTree] = useState('hidden')

  return (
    <div
      onMouseEnter={() => setShowDotTree('block')}
      onMouseLeave={() => setShowDotTree('hidden')}
      className="peer flex items-center justify-between py-3"
    >
      <div className="flex items-center">
        <img
          className="mr-3 h-[2rem] w-[2rem] rounded-full"
          src={data.data().avatar}
          alt=""
        />
        <div className="text-gray space-y-1 ">
          <p className="font-bold">
            {data.data().username}
            <span className="ml-2 font-normal">{data.data().comment}</span>
          </p>
          <p className="flex items-center text-[0.8rem] text-gray-400">
            <Moment fromNow ago className="w-[4rem]">
              {data.data().timestamp?.toDate()}
            </Moment>
            <span className="ml-2 cursor-pointer font-semibold">Reply</span>
            <HiOutlineDotsHorizontal
              className={`${showDotTree} ml-3 cursor-pointer text-[1.3rem]`}
            />
          </p>
        </div>
      </div>

      <BsSuitHeart className="cursor-pointer" />
    </div>
  )
}
export default Comment
