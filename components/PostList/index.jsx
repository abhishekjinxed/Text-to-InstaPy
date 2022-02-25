import PostItem from 'components/PostItem'
import videoList from './list'

export default function PostList () {
  return (
    <section className='post-list'>
      {videoList.map(item => (
        <PostItem key={item.id} item={item}/>
      ))}
      <style jsx>{`
        .post-list {
          height: 100vh;
          overflow-y: auto;
          overflow-x: hidden;
          scroll-snap-type: y mandatory;
          scroll-behavior: smooth;
          scrollbar-gutter: stable;
        }
      `}</style>
    </section>
  )
}
