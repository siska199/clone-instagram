import React, { useRef, useState } from 'react'
import { dataVideosStory as videos } from '../../lib/data'
import { BsThreeDots, BsPlay } from 'react-icons/bs'
import { GrFormPrevious, GrFormNext } from 'react-icons/gr'
import { AiOutlineClose } from 'react-icons/ai'

import {
  AiOutlineAudio,
  AiOutlinePause,
  AiOutlineAudioMuted,
} from 'react-icons/ai'

const ModalStory = ({ setModal, modal }) => {
  const [index, setIndex] = useState(0)
  const [paused, setPaused] = useState(false)
  const [muted, setMuted] = useState(false)

  const videoElm = useRef(null)

  const handleIndex = (e) => {
    index < videos.length - 1
      ? setIndex((prev) => {
          videoElm.current.src = videos[prev + 1].url
          return prev + 1
        })
      : setModal(!modal)
  }
  const handlePauseUnPause = () => {
    setPaused(!paused)
    if (videoElm.current.paused) {
      videoElm.current.play()
    } else {
      videoElm.current.pause()
    }
  }
  const handleAudio = () => {
    setMuted(!muted)
  }

  const handleNextPrev = (next, previous) => {
    if (next) {
      setIndex((prev) => {
        videoElm.current.src = videos[prev + 1].url
        return prev + 1
      })
    }
    if (previous) {
      setIndex((prev) => {
        videoElm.current.src = videos[prev - 1].url
        return prev - 1
      })
    }
  }
  return (
    <section className="fixed top-0 -left-5 z-50 flex h-full w-full items-center justify-center gap-3 bg-zinc-800 py-4 text-white">
      {index > 0 && (
        <span
          onClick={() => handleNextPrev(false,true)}
          className="cursor-pointer rounded-full border-2 bg-slate-400 hover:bg-white"
        >
          <GrFormPrevious size="2rem" />
        </span>
      )}

      <div className="flex h-full w-[27rem] flex-col gap-4 rounded-lg border-2 border-zinc-600 py-5">
        <div className="flex w-full flex-row justify-between px-5">
          {videos.map((_, i) => (
            <div key={i} className={`flex h-[0.15rem] w-[30%] bg-zinc-600`}>
              <span
                style={{ animationDuration: videos[index].duration }}
                className={`progress-bar  ${
                  i == index && `progress-bar-active`
                }  relative z-40 h-[0.15rem]
                ${i < index && 'progress-bar-finished'}
                ${paused && 'progress-bar-paused '}
                `}
              ></span>
            </div>
          ))}
        </div>
        <div className="flex justify-between px-5">
          <div className="flex items-center gap-2">
            <img
              className="h-8 w-8 rounded-full"
              src="https://www.business2community.com/wp-content/uploads/2017/08/blank-profile-picture-973460_640.png"
            />
            <h1 className="text-[1.1rem] font-medium">
              siska199 <span className="font-thin">3h</span>
            </h1>
          </div>
          <div className="flex gap-3 text-[1.3rem]">
            <span
              onClick={() => handlePauseUnPause()}
              className="cursor-pointer"
            >
              {paused ? <BsPlay /> : <AiOutlinePause />}
            </span>
            <span className="cursor-pointer" onClick={() => handleAudio()}>
              {muted ? <AiOutlineAudioMuted /> : <AiOutlineAudio />}
            </span>
            <span className="cursor-pointer">
              <BsThreeDots />
            </span>
          </div>
        </div>
        <video
          muted={muted}
          autoPlay
          ref={videoElm}
          src={videos[0].url}
          className="mt-[7rem]"
          onEnded={(e) => handleIndex(e)}
        ></video>
      </div>
      {index != videos.length - 1 && (
        <span
          onClick={() => handleNextPrev(true,false)}
          className="cursor-pointer rounded-full border-2 bg-slate-400 hover:bg-white"
        >
          <GrFormNext size="2rem" />
        </span>
      )}

      <span
        onClick={() => setModal(!modal)}
        className="absolute top-6 right-6 cursor-pointer rounded-full bg-zinc-600 p-2 text-[1.2rem] hover:bg-slate-400"
      >
        <AiOutlineClose />
      </span>
    </section>
  )
}

export default ModalStory
