import Player from 'components/Player'
import PostItemSidebar from 'components/PostItem/PostItemSidebar'
import PostItemBottom from 'components/PostItem/PostItemBottom'

export default function PostItem ({ item }) {
  const { video } = item

  return (
    <article className='post-item'>
      <Player src={video.src} poster={video.poster} />
      <PostItemSidebar {...item} />
      <PostItemBottom {...item} />
      <style jsx>{`
        .post-item {
          display: flex;
          width: 100%;
          height: calc(var(--vh, 1vh) * 100);
          scroll-snap-align: center;
          position: relative;
        }
      `}</style>
    </article>
  )
}
