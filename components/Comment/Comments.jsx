import React, { useEffect, useState } from 'react'
import Comment from './Comment'
import { collection, onSnapshot, orderBy, query } from 'firebase/firestore'
import { db } from '../../firebase.config'

const Comments = ({ id }) => {
  const [comments, setComments] = useState([])
  useEffect(() => {
    const unsub = onSnapshot(
      query(collection(db, 'posts', id, 'comments'), orderBy('timestamp')),
      (snap) => {
        setComments(snap.docs)
      }
    )
    return () => unsub
  }, [db])
  return (
    <div>
      {comments.length > 0 &&
        comments.map((data, i) => <Comment key={i} data={data} />)}
    </div>
  )
}
export default Comments
