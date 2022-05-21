import React from 'react'
import StoryIcon from '../StoryIcon/StoryIcon'
import { BsThreeDots } from 'react-icons/bs'

import { BsSuitHeart } from 'react-icons/bs'
import { BsChat } from 'react-icons/bs'
import { FiSend } from 'react-icons/fi'
import { BsBookmark } from 'react-icons/bs'
import Comments from '../Comment/Comments'
import { AddComment } from '../Comment/AddComment'
const Feed = ({ avatar, username, imagePost, caption }) => {
  console.log('imagePosts: ', imagePost)
  return (
    <div className="mt-5 border-2 bg-white">
      <div className="flex items-center justify-between border-b-2 p-4">
        <StoryIcon
          size={'small'}
          url={avatar}
          username={username}
          feed={true}
        />
        <BsThreeDots size="1.5rem" color="#a4a4a4" />
      </div>
      <div className="flex justify-center">
        <img src={imagePost} alt="" />
      </div>
      <div className="m-3">
        <div className="flex justify-between text-[1.6rem]">
          <div className="flex space-x-4">
            <BsSuitHeart className="cursor-pointer" />
            <BsChat className="cursor-pointer" />
            <FiSend className="cursor-pointer" />
          </div>
          <BsBookmark className="cursor-pointer" />
        </div>
        <p className="my-3 font-medium">50 likes</p>
        <p>
          <span className="font-semibold">{username} </span>
          {caption}
        </p>
        <Comments />
      </div>
      <AddComment />
    </div>
  )
}

export default Feed
