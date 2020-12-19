import React from 'react'
import './home.css'
import Iam from './Iam'

const Hero = () => {
    return (
        <div className='hero-bg'>
            {/* <video src='/images/video-1.mp4' autoPlay loop muted /> */}
            <img src='/images/myFace.jpeg' className='ui small centered circular image' />
            <h2 >Amer Abdulahad Jumah</h2>
            <Iam />
        </div>
    )
}

export default Hero
