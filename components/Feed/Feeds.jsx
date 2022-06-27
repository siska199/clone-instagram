import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Feed from './Feed'
import { handleGetPosts } from '../../redux/action/posts'

const Feeds = () => {
  const dispatch = useDispatch()
  const posts = useSelector((state) => state.posts.posts)
  
  useEffect(() => {
    dispatch(handleGetPosts())
  }, [])

  return (
    <div className="w-full">
      {posts.map((data, i) => (
        <Feed key={data.id} id={data.id} data={data} />
      ))}
    </div>
  )
}

export default Feeds
