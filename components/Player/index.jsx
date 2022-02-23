import { useRef, useState } from 'react'
import { PlayerIcon } from './player-icon'

export default function Player ({ src, poster }) {
  const [playing, setPlaying] = useState(false)
  const video = useRef(null)

  const handlePlay = () => {
    const { current: videoEl } = video
    playing
      ? videoEl?.pause()
      : videoEl?.play()

    setPlaying(!playing)
  }

  return (
    <div className='player'>
      <video
        src={src}
        loop
        webkit-playsinline='true'
        playsInline
        poster={poster}
        ref={video}
      >
        <track kind='captions' />
      </video>
      <div
        className='player-overlay'
        role='button'
        onClick={handlePlay}
        onKeyPress={handlePlay}
        tabIndex={0}
      >
        {!playing && <PlayerIcon />}
      </div>
      <style jsx>{`
        .player {
          display: flex;
          position: relative;
          width: 100%;
          height: 100vh;
          background: var(--black);
          overflow: hidden;
        }

        .player video {
          position: relative;
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .player-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          display: grid;
          place-content: center;
          visibility: visible;
        }
      `}</style>
    </div>
  )
}
