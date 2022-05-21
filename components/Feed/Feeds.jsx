import { collection, onSnapshot, orderBy, query } from 'firebase/firestore'
import React, { useEffect, useState } from 'react'
import { db } from '../../firebase.config'
import Feed from './Feed'

const Feeds = () => {
  const [posts, setPosts] = useState(false)
  useEffect(() => {
    const unsub = onSnapshot(
      query(collection(db, 'posts'), orderBy('timestamp', 'desc')),
      (snap) => {
        console.log('docs: ', snap.docs)
        setPosts(snap.docs)
      }
    )

    return () => unsub
  }, [db])
  return (
    <div className="w-full">
      {posts &&
        posts.map((data, i) => (
          <Feed
            key={i}
            avatar={data.data().avatar}
            username={data.data().username}
            imagePost={data.data().imagePost}
            caption={data.data().caption}
          />
        ))}
    </div>
  )
}

export default Feeds
