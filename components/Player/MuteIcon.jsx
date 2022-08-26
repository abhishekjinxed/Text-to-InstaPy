import Image from 'next/image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { faVolumeMute } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react'
export function MuteIcon () {

;


  return (
    <>
      <div className='player-icon'>
    
       <FontAwesomeIcon icon={faVolumeMute}  /> 
      </div>

      <style jsx>{`
        .player-icon {
          width: 100%;
          height:  100%;
          padding:5px;
          display:block;
          margin:auto;
          text-align: right;         
          position:absolute; 
          border-radius:10%;         
                       }
                 ` 
          }</style>
    </>
  )
}
