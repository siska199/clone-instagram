import { combineReducers } from 'redux'
import posts from './posts'
import comments from './comments'
import likes from './likes'

const reducers = combineReducers({
  posts,
  comments,
  likes,
})

export default reducers
