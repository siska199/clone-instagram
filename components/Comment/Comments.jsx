import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { handleGetComments } from '../../redux/action/comments'
import Comment from './Comment'

const Comments = ({ id }) => {
  const dispatch = useDispatch()
  const dataCommentsByIdPosts = useSelector(
    (state) => state.comments.comments
  ).filter((data) => data.idPost == id)
  const comments = dataCommentsByIdPosts[0] ? dataCommentsByIdPosts[0].data : []

  useEffect(() => {
    dispatch(handleGetComments(id))
  }, [dispatch])

  return (
    <div className='h-[13vw] overflow-y-scroll no-scrollbar'>
      {comments.length > 0 &&
        comments.map((data, i) => <Comment key={i} data={data} />)}
    </div>
  )
}
export default Comments
