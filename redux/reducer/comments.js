import {
  GET_COMMENTS,
  GET_COMMENT,
  ADD_COMMENT,
  EDIT_COMMENT,
  DELETE_COMMENT,
} from '../typeAction/comments'

const initialState = {
  comments: [],
}

const comments = (state = initialState, action) => {
  switch (action.type) {
    case GET_COMMENTS:

      let comments = state.comments

      const index = comments.findIndex(
        (commentsPost) => commentsPost.idPost == action.payload.idPost
      )
      console.log('index', index)
      if (index != -1) {
        comments[index] = { ...action.payload }
      } else {
        comments.push({
          ...action.payload,
        })
      }

      return {
        ...state,
        comments: [...comments],
      }
    case '':
      return state
    case '':
      return state
    default:
      return state
  }
}

export default comments
