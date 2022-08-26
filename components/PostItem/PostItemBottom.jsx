import PostItemAlbum from './PostItemAlbum'
import PostItemMusic from './PostItemMusic'

export default function PostItemBottom ({ author, title, album }) {
  return (
    <div className='post-item-bottom'>
      <div className='post-item-info'>
        <a href={`/${author}`} >{author}</a>
        <p>{title}</p>
      </div>
      <div className='post-item-content'>
        <PostItemMusic album={album} />
        <PostItemAlbum album={album} />
      </div>
      <style jsx>{`
        .post-item-bottom {
          position: absolute;
          left: 0;
          right: 0;
          bottom: 0;
          padding: 0 15px 15px 30px;
        }

        .post-item-content {
          display: flex;
          align-items: flex-end;
          justify-content: space-between;
        }

        .post-item-info {
          padding-right: 80px;
        }

        .post-item-info a {
          color: var(--sugar-cane);
          font-size: 21px;
          font-weight: bold;
          margin-bottom: 14px;
        }

        .post-item-info p {
          color: var(--sugar-cane);
          font-size: 15px;
          font-weight: 400;
          line-height: 1.15;
        }
      `}</style>
    </div>
  )
}
