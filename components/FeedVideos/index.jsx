import Player from 'components/Player'
import videoList from './list'

export default function FeedVideos () {
  return (
    <section className='feed-videos'>
      {videoList.map(({ id, video }) => (
        <div key={id} className='feed-videos-item'>
          <Player src={video.src} poster={video.poster} />
        </div>
      ))}
      <style jsx>{`
        .feed-videos {
          height: 100vh;
          overflow-y: auto;
          overflow-x: hidden;
          scroll-snap-type: y mandatory;
          scroll-behavior: smooth;
          scrollbar-gutter: stable;
        }

        .feed-videos-item {
          width: 100vw; 
          scroll-snap-align: center;
        }
      `}</style>
    </section>
  )
}
