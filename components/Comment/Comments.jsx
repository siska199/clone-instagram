import React, { useEffect, useState } from 'react'
import Comment from './Comment'
import { faker } from '@faker-js/faker'

const Comments = () => {
  const [comments, setComments] = useState([])
  useEffect(() => {
    const fakeComments = [...Array(2)].map((_, i) => ({
      id: i,
      username: faker.name.firstName(true),
      url: faker.image.avatar(true),
      comment: faker.lorem.lines(true),
    }))
    setComments(fakeComments)
  }, [])
  return (
    <div>
      {comments.map((data, i) => (
        <Comment key={i} data={data} />
      ))}
    </div>
  )
}
export default Comments
