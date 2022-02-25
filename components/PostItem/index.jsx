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
          width: 100%;
          height: 100vh;
          scroll-snap-align: center;
          position: relative;
        }
      `}</style>
    </article>
  )
}
