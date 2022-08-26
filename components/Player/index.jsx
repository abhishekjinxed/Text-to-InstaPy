import { useRef, useState,useEffect } from 'react'
import { MuteIcon } from 'components/Player/MuteIcon'
import {useCallback } from 'react'
import { useRouter } from 'next/router'

export default function Player ({ src, poster,id,cnt,scrolltop,mute}) {
   const video =useRef(null)
   const muteref=useRef(null)
   
  
   const router = useRouter()

   

   
  
   function isNaturalNumber (str) {
   return (str).toFixed() ;
}

  useEffect(()=>{
const height =video.current.clientHeight

const curentvideonumber= isNaturalNumber(scrolltop/height)

if(curentvideonumber==cnt)
{
 // router.push('/','/reel/'+id,{ shallow: true }) 
 
 
  video.current.play()

  video.current.addEventListener("loadeddata", function() {
  console.log(video.current.webkitAudioDecodedByteCount )
  })
  
if(video.current.webkitAudioDecodedByteCount  > 0 )
 {
  muteref.current.style.display = 'none' ;
  
 
}
else
{
muteref.current.style.display = 'block'
muteref.current.style.webkitAnimation = 'fadein 2s';
setTimeout(()=>{muteref.current.style.display = 'none'},1500) ;
}


  
}
else
{
 video.current.pause()
}
  },[scrolltop])


  return (
    <div className='player'>
      <video
        id={id}
        keyid={cnt}
        src={src}  
        muted  ={mute} 
        webkit-playsinline='true'
        playsInline
        loop
        poster={poster}
        ref={video}              
        
          // document.getElementsByClassName('post-list')[0].scrollTop
          
        
      >
        <track kind='captions' />
      </video>
      <div
        className='player-overlay'
        role='button'    
        tabIndex={0}      
      >
    {
      <p className='nosound' ref={muteref}>Video has no sound </p>
      
    }
    { mute&&<MuteIcon/>}
      </div>
      <style jsx>{`
        .player {
          flex: auto;
          position: relative;          
          background: var(--black);
          overflow: hidden;
        }

        .player video {
          position: relative;
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .player-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          display: grid;
          place-content: center;
          visibility: visible;
        }
        @-webkit-keyframes fadein {
          from { opacity: 1; }
          to   { opacity: 0; }
      }
        
      `}</style>
    </div>
  )
}
