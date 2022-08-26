import PostItem from 'components/PostItem'
import videoList from './list'

import {useState} from 'react'

export default function PostList ({video}) {

  const [mute,setMute]=useState(true)

  const [topscrol,setTopscroll]=useState(0)
  
  const handleScroll = event => {
    // console.log('scrollTop: ', event.currentTarget.scrollTop);
    setTopscroll(event.currentTarget.scrollTop)
    // console.log('offsetHeight: ', event.currentTarget.offsetHeight);
  };
 

  return (
    <section className='post-list' onScroll={handleScroll} 
    onClick={()=>  
      {   setMute(!mute)
        
         
      }
       
     }>
      
      {video.map( (item,k) => (
      
        <PostItem key={k} item={item} id={k} offset={topscrol} mute={mute}/>
    
      ))}
      <style jsx>{`
        .post-list {
          height: calc(var(--vh, 1vh) * 100);
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
