import Image from 'next/image'

export function PlayerIcon () {
  return (
    <>
      <div className='player-icon'>
        <Image src='/icons/play.png' width='64' height='64' alt='Play'/>
      </div>

      <style jsx>{`
        .player-icon {
          width: 64px;
          height: 64px;
        }
      `}</style>
    </>
  )
}
