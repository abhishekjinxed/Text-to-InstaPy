/* eslint-disable @next/next/no-img-element */
import Image from 'next/image'


export default function PostItemAlbum ({album}) {
  return (
    <div className='post-item-album'>
      <img src={album.Cover} alt="album cover" layout='fill'  />
      <style jsx>{`
        .post-item-album {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 48px;
          height: 48px;
          background: var(--shark);
          border-radius: 50%;
          padding: 5px;
          position: relative;
        }

        .post-item-album::before {
          content: '';
          position: absolute;
          top: 50%;
          left: 50%;
          width: 34px;
          height: 34px;
          border: 0.5px solid var(--splash);
          border-radius: 50%;
          transform: translate(-50%, -50%);
        }

        .post-item-album img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          border-radius: 50%;
        }
      `}</style>
    </div>
  )
}
