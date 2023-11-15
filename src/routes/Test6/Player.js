import { cssVideo } from "./style";

import { useState, useRef } from 'react'

const Player = () => {
  const videoRef = useRef(null)
  const [play, setPlay] = useState(false)
  const [mute, setMute] = useState(false)
  const [currentTimeVideo, setCurrentTimeVideo] = useState(0)
  const [durationVideo, setDurationVideo] = useState(0)
  const [seekTime, setSeekTime] = useState(0)

  const handlePlay = () => {
    if (!play) videoRef.current.play()
    else videoRef.current.pause()
    
    setPlay(!play)
  }

  const handleVideoTime = () => {
    setCurrentTimeVideo(videoRef.current.currentTime)
    setDurationVideo(videoRef.current.duration)
    setSeekTime(videoRef.current.currentTime)
  }

  const handleChangeSeek = (time) => {
    videoRef.current.currentTime = time
    setSeekTime(time)
  }

  const handleFormatTime = (time) => {
    const minutes = Math.floor(time / 60)
    const second = Math.floor(time % 60)
    const resultTime = `${('0'+ minutes).slice(-2)}:${('0'+ second).slice(-2)}` 
    return resultTime
  }
  
  return(
    <div>
      <video
        className={cssVideo}
        src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
        ref={videoRef}
        muted={mute}
        onTimeUpdate={handleVideoTime}
      />
      <button type="button" onClick={handlePlay}>{!play ? 'Play' : 'Pause'}</button>
      <button type="button" onClick={() => setMute(!mute)}>{!mute ? 'Mute' : 'Unmute'}</button>
      <input type="range" value={seekTime} min='0' max={durationVideo} step='0.01' onChange={(e) => handleChangeSeek(e.target.value)} />
      <span>{handleFormatTime(currentTimeVideo)}/{handleFormatTime(durationVideo)}</span>
    </div>
  )
}

export default Player;
