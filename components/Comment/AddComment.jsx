import React, { useState } from 'react'
import { BsEmojiSmile } from 'react-icons/bs'
import { addDoc, collection, serverTimestamp } from 'firebase/firestore'
import { useSession } from 'next-auth/react'
import { db } from '../../firebase.config'

export const AddComment = ({ id }) => {
  const [comment, setComment] = useState('')
  const { data: session } = useSession()

  const handleSendComment = async (e) => {
    e.preventDefault()

    const resAddComment = await addDoc(
      collection(db, 'posts', id, 'comments'),
      {
        comment: comment,
        username: session.user.username,
        avatar: session.user.image,
        timestamp: serverTimestamp(),
      }
    )
    setComment('')
    console.log('ress add comment: ', resAddComment)
  }
  return (
    <form className="flex justify-between space-x-2 border-t-2 p-3">
      <BsEmojiSmile className="text-[1.5rem]" />
      <input
        onChange={(e) => setComment(e.target.value)}
        className="w-full bg-white outline-none"
        placeholder="Add comment..."
        value={comment}
      />
      <button
        type="submit"
        disabled={comment === '' ? true : false}
        className="font-bold text-[#385185] disabled:opacity-60"
        onClick={(e) => handleSendComment(e)}
      >
        Post
      </button>
    </form>
  )
}
