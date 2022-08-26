import Image from 'next/image'

export default function Avatar ({ src="/lfeoafa.jpg", alt }) {
  return (
    <div className='avatar'>
      <Image src={src} alt={alt} layout='fill' />
      <style jsx>{`
        .avatar {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 48px;
          height: 48px;
          border-radius: 50%;
          position: relative;
          overflow: hidden;
        }

        .avatar img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          border-radius: 50%;
        }
      `}</style>
    </div>
  )
}
