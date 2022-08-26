import Player from 'components/Player'
import PostItemSidebar from 'components/PostItem/PostItemSidebar'
import PostItemBottom from 'components/PostItem/PostItemBottom'



export default function PostItem (props) {

 const video  = props.item


const item=props.item
  return (
    <article className='post-item'  >
      <Player src={video.mp4} poster={video.poster} id={video.id} cnt={props.id} scrolltop={props.offset} mute={props.mute} />
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
