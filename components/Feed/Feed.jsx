import React from 'react'
import StoryIcon from '../StoryIcon/StoryIcon'
import { BsThreeDots } from 'react-icons/bs'

import { BsSuitHeart, BsSuitHeartFill } from 'react-icons/bs'
import { BsChat } from 'react-icons/bs'
import { FiSend } from 'react-icons/fi'
import { BsBookmark } from 'react-icons/bs'
import Comments from '../Comment/Comments'
import { AddComment } from '../Comment/AddComment'
import Moment from 'react-moment'
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  onSnapshot,
} from 'firebase/firestore'
import { db } from '../../firebase.config'
import { useSession } from 'next-auth/react'
import { useState, useEffect } from 'react'

const Feed = ({ id, data }) => {
  const { data: session } = useSession()
  const [likesData, setLikesData] = useState([])
  const [like, setLike] = useState(false)
  useEffect(() => {
    const unsub = onSnapshot(collection(db, 'posts', id, 'likes'), (snap) => {
      const findUser = snap.docs.filter(
        (data) => data.data().username == session.user.username
      )[0]
      setLike(findUser)
      setLikesData(snap.docs)
    })
    return () => unsub
  }, [db])

  const handleLike = async (e) => {
    if (like) {
      await deleteDoc(doc(db, 'posts', id, 'likes', like.id))
      setLike(false)
    } else {
      await addDoc(collection(db, 'posts', id, 'likes'), {
        username: session.user.username,
      })
    }
  }

  return (
    <div className="relative mt-5 border-2 bg-white">
      <div className="flex items-center justify-between border-b-2 p-4">
        <StoryIcon
          size={'small'}
          url={data.data().avatar}
          username={data.data().username}
          feed={true}
        />
        <BsThreeDots className="cursor-pointer" size="1.5rem" color="#a4a4a4" />
      </div>
      <div className="flex justify-center">
        <img src={data.data().imagePost} alt="" />
      </div>
      <div className="m-3">
        <div className="flex justify-between text-[1.6rem]">
          <div className="flex space-x-4">
            {like ? (
              <BsSuitHeartFill
                onClick={(e) => handleLike(e)}
                className="cursor-pointer text-red-600"
              />
            ) : (
              <BsSuitHeart
                onClick={(e) => handleLike(e)}
                className="cursor-pointer"
              />
            )}

            <BsChat className="cursor-pointer" />
            <FiSend className="cursor-pointer" />
          </div>
          <BsBookmark className="cursor-pointer" />
        </div>
        <p className="mt-2 font-medium">{likesData.length} likes</p>
        <p>
          <span className="font-semibold">{data.data().username} </span>
          {data.data().caption}
        </p>
        <Comments id={data.id} />
        <Moment className="font-semimedium text-sm text-gray-400" fromNow ago>
          {data.data().timestamp?.toDate()}
        </Moment>
      </div>
      <AddComment id={data.id} />
    </div>
  )
}

export default Feed
