import Avatar from 'components/Avatar'
import HeartIcon from 'components/Icons/Heart'
import CommentIcon from 'components/Icons/Comment'
import ShareIcon from 'components/Icons/Share'

export default function PostItemSidebar ({ author, avatar, likes, comments, shares }) {
  return (
    <div className='post-item-sidebar'>
      <Avatar src={avatar} alt={author} />
      <div className='post-item-icons'>
        <button type='button' className='btn-icon post-item-icon'>
          <HeartIcon />
          <span>{likes}</span>
        </button>
        <button type='button' className='btn-icon post-item-icon'>
          <CommentIcon />
          <span>{comments}</span>
        </button>
        <button type='button' className='btn-icon post-item-icon'>
          <ShareIcon />
          <span>{shares || 'Share'}</span>
        </button>
      </div>
      <style jsx>{`
        .post-item-sidebar {
          position: absolute;
          right: 15px;
          bottom: 86px;
          display: flex;
          flex-direction: column;
          align-items: center;
          z-index: 1;
        }

        .post-item-icons {
          display: grid;
          grid-template-columns: 1fr;
          grid-gap: 12px;
          margin-top: 32px;
        }

        .post-item-icon {
          flex-direction: column;
        }

        .post-item-icon  span {
          color: var(--sugar-cane);
          font-size: 13px;
          font-weight: 500;
        }
      `}</style>
    </div>
  )
}
