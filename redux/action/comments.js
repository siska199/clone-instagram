import { collection, onSnapshot, orderBy, query } from 'firebase/firestore'
import { db } from '../../firebase.config'

import {
  GET_COMMENTS,
  GET_COMMENT,
  ADD_COMMENT,
  EDIT_COMMENT,
  DELETE_COMMENT,
} from '../typeAction/comments'

export const handleGetComments = (idPost) => async (dispatch) => {
  try {
    onSnapshot(
      query(collection(db, 'posts', idPost, 'comments'), orderBy('timestamp')),
      (snaps) => {
        console.log('gert data: ', snaps.docs)
        dispatch({
          type: GET_COMMENTS,
          payload: {
            idPost,
            data: snaps.docs,
          },
        })
      }
    )
  } catch (error) {
    throw error
  }
}
