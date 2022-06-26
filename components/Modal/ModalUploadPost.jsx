import React, { useRef, useState } from 'react'
import { ref, uploadString, getDownloadURL } from 'firebase/storage'
import { storage, db } from '../../firebase.config'
import { BiCamera } from 'react-icons/bi'
import { addDoc, collection, serverTimestamp } from 'firebase/firestore'
import { useSession } from 'next-auth/react'

const ModalUploadPost = ({ setOpen }) => {
  const { data: session } = useSession()
  const imageRef = useRef(null)
  const captionRef = useRef('')
  const [urlFile, setUrlFile] = useState(false)
  const [loading, setLoading] = useState(false)
  const handleOnchangeImage = (e) => {
    const reader = new FileReader()
    if (e.target.files[0]) {
      reader.readAsDataURL(e.target.files[0])
    }
    reader.onload = (rederEvent) => {
      setUrlFile(rederEvent.target.result)
    }
  }

  const handlePost = async (e) => {
    setLoading(true)
    //Upload image to firebase storage
    const storageRef = ref(storage, `images/${Date.now()}`)
    uploadString(storageRef, urlFile, 'data_url').then(async (snapshoot) => {
      const downloadURL = await getDownloadURL(storageRef)

      //Upload data to firestore
      await addDoc(collection(db, 'posts'), {
        username: session.user.username,
        caption: captionRef.current.value,
        avatar: session.user.image,
        timestamp: serverTimestamp(),
        imagePost: downloadURL,
      })

      setLoading(false)
      setOpen(false)
    })
  }

  return (
    <div
      onClick={() => setOpen(false)}
      className="fixed top-0 left-0 z-[99] flex h-full w-full items-center justify-center overflow-hidden bg-black/80 "
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative flex w-[20rem] flex-col items-center justify-center rounded-lg !bg-white p-5 "
      >
        {urlFile ? (
          <img className="mb-2 h-[10rem]	 object-contain" src={urlFile} alt="" />
        ) : (
          <div
            onClick={() => imageRef.current.click()}
            className="mb-2 cursor-pointer rounded-full border-2 border-red-700 bg-gray-300 p-3"
          >
            <BiCamera size="2rem" />
            <input
              ref={imageRef}
              type="file"
              accept="image/*"
              onChange={(e) => handleOnchangeImage(e)}
              hidden
            />
          </div>
        )}
        <h1 className="text-lg font-semibold">Upload a photo</h1>
        <input
          className="mb-2 w-[70%] outline-none"
          placeholder="Please enter a caption..."
          ref={captionRef}
        />

        <button
          onClick={(e) => handlePost(e)}
          disabled={(urlFile === false) & true}
          className="flex w-full items-center justify-center rounded-lg bg-red-600 py-1 text-white disabled:opacity-50"
        >
          {loading && (
            <svg
              role="status"
              className="mr-3 inline h-4 w-4 animate-spin text-white"
              viewBox="0 0 100 101"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                fill="#E5E7EB"
              />
              <path
                d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                fill="currentColor"
              />
            </svg>
          )}
          Upload
        </button>
      </div>
    </div>
  )
}

export default ModalUploadPost
