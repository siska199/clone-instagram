import {
  collection,
  getDocs,
  onSnapshot,
  orderBy,
  query,
} from 'firebase/firestore'
import { db } from '../../firebase.config'

import {
  GET_POSTS,
  GET_POST,
  ADD_POST,
  EDIT_POST,
  DELETE_POST,
} from '../typeAction/posts'

export const handleGetPosts = () => async (dispatch) => {
  onSnapshot(
    query(collection(db, 'posts'), orderBy('timestamp', 'desc')),
    (snaps) => {
      dispatch({
        type: GET_POSTS,
        payload: snaps.docs,
      })
    }
  )
}
