import MusicIcon from 'components/Icons/Music'

export default function PostItemMusic ({ album }) {
  const items = [...Array(3).keys()]

  return (
    <div className='post-item-music'>
      <MusicIcon />
      <div className='post-item-music-box'>
        <div className='post-item-music-items'>
          {items.map(key => <div key={key}>{album.title}</div>)}
        </div>
      </div>
      <style jsx>{`
        .post-item-music {
          display: flex;
          align-items: center;
          flex: 1 1 100%;
          max-width: calc(100% - 80px);
          color: var(--sugar-cane);
        }

        .post-item-music-box {
          position: relative;
          overflow: hidden;
        }
        
        .post-item-music-items {
          display: flex;
          width: max-content;
          animation: 3s linear 0s infinite normal none running rowleft;
        }

        .post-item-music-items > div {
          margin-right: 20px;
        }
      `}</style>

      <style jsx global>{`
        .post-item-music i {
          margin-right: 15px;
        }
      `}</style>
    </div>
  )
}
