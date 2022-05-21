import { initializeApp, getApp, getApps } from 'firebase/app'
import {getFirestore} from "firebase/firestore"
import {getStorage} from "firebase/storage"

const firebaseConfig = {
  apiKey: 'AIzaSyArVPXHQyyquHE5jy-9LoP3Jxf3N7z9Xvw',
  authDomain: 'clone-instagram-9ab86.firebaseapp.com',
  projectId: 'clone-instagram-9ab86',
  storageBucket: 'clone-instagram-9ab86.appspot.com',
  messagingSenderId: '82745622975',
  appId: '1:82745622975:web:ff55b6942c13938e0d210a',
}

export const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig)
export const db = getFirestore()
export const storage = getStorage()
