import React from 'react'
import '../App.css'
import video from '../assets/images/bgvideo1.mp4'


function Background() {
  return (
    <div className='background'>
      <video className='w-full h-full absolute object-cover' autoPlay loop muted src={video}></video>
    </div>
  )
}

export default Background
