import { useRouter } from 'next/router'
import Player from '../../components/Player'
import PostItemSidebar from 'components/PostItem/PostItemSidebar'
import PostItemBottom from 'components/PostItem/PostItemBottom'

const Post = () => {
  const router = useRouter()
  const { pid } = router.query
  const video  = {
    mp4:'https://i.imgur.com/04BJ3wy.mp4',
    poster:'https://i.imgur.com/04BJ3wy.mp4',
    id:'feafea',
    title:'feaf',
    album:{
      title:'feafe- jack harlow'
    }

  }
  const item=video
  return (

    <article className='post-item'>
    <Player src={video.mp4} poster={video.poster} id={video.id} />
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

export default Post