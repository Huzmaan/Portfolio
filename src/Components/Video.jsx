import React from 'react'
import { portfoliovideo } from '../assets/video'

const Video = () => {
  return (
    <div className='grad'>
        <div className="container mx-auto py-8 h-screen">
      <video className="w-full rounded-3xl " autoPlay controls>
      <source src={portfoliovideo} type="video/mp4" />
      Your browser does not support the video tag.
    </video>
        </div>
    </div>
  )
}

export default Video
