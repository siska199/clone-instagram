import React, { useState } from 'react'
import { BsEmojiSmile } from 'react-icons/bs'
import { addDoc, collection, serverTimestamp } from 'firebase/firestore'
import { useSession } from 'next-auth/react'
import { db } from '../../firebase.config'
import Picker from 'emoji-picker-react'

export const AddComment = ({ id }) => {
  const [comment, setComment] = useState('')
  const { data: session } = useSession()

  const handleSendComment = async (e) => {
    e.preventDefault()
    await addDoc(collection(db, 'posts', id, 'comments'), {
      comment: comment,
      username: session.user.username,
      avatar: session.user.image,
      timestamp: serverTimestamp(),
    })
    setComment('')
  }

  const [showEmoji, setShowEmoji] = useState(false)
  const onEmojiClick = (event, emojiObject) => {
    setComment((prev) => prev + ' ' + emojiObject.emoji)
  }

  return (
    <form className="flex justify-between space-x-2 border-t-2 p-3">
      <div className="relative">
        <BsEmojiSmile
          onClick={() => setShowEmoji(!showEmoji)}
          className="cursor-pointer text-[1.5rem]"
        />
        {showEmoji && (
          <div className="absolute top-6 z-[9999]">
            <Picker onEmojiClick={onEmojiClick} />
          </div>
        )}
      </div>
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
