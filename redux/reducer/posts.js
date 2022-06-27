import {
  GET_POSTS,
  GET_POST,
  ADD_POST,
  EDIT_POST,
  DELETE_POST,
} from '../typeAction/posts'

const initialState = {
  posts: [],
  post: [],
  loading: false,
}

const posts = (state = initialState, action) => {
  switch (action.type) {
    case GET_POSTS:
      return {
        ...state,
        posts: action.payload,
      }
    case GET_POST:
      return state
    case ADD_POST:
      return state
    case EDIT_POST:
      return state
    case DELETE_POST:
      return state
    default:
      return state
  }
}

export default posts
