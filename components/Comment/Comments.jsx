import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { handleGetComments } from '../../redux/action/comments'
import Comment from './Comment'

const Comments = ({ id }) => {
  const dispatch = useDispatch()

  const dataCommentsByIdPosts = useSelector(
    (state) => state.comments.comments
  ).filter((data) => data.idPost == id)
  console.log(`array updated: ${id} `, dataCommentsByIdPosts)
  const comments = dataCommentsByIdPosts[0] ? dataCommentsByIdPosts[0].data : []

  useEffect(() => {
    dispatch(handleGetComments(id))
  }, [dispatch])

  return (
    <div>
      {comments.length > 0 &&
        comments.map((data, i) => <Comment key={i} data={data} />)}
    </div>
  )
}
export default Comments
