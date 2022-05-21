import { collection, onSnapshot, orderBy, query } from 'firebase/firestore'
import React, { useEffect, useState } from 'react'
import { db } from '../../firebase.config'
import Feed from './Feed'

const Feeds = () => {
  const [posts, setPosts] = useState([])
  useEffect(() => {
    const unsub = onSnapshot(
      query(collection(db, 'posts'), orderBy('timestamp', 'desc')),
      (snap) => {
        setPosts(snap.docs)
      }
    )
    return () => unsub
  }, [db])

  return (
    <div className="w-full">
      {posts.map((data, i) => (
        <Feed key={data.id} id={data.id} data={data} />
      ))}
    </div>
  )
}

export default Feeds
