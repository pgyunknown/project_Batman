import React from 'react'
import Header from '../components/Header'
import Popup from '../components/PopUp'

const Home = () => {
  return (
    <>
      
    <div className="w-full sm:h-screen  text-2xl  ">
      <img src="/bannerPic.webp" className="w-full  sm:h-[100vh] h-[50vh] " />
      </div>
      <div className='sm:my-5 sm:mx-5 '>
        <h1 className='sm:text-4xl sm:p-2 text-5xl font-anton '>What is this?</h1>
        <p className='sm:text-2xl sm:p-2 text-sm tracking-wide font-web border-b-2 border-gray-400'>
          This project aims to provide a comprehensive guide to Batman's universe, exploring his characters, storylines, and cultural impact.As a passion project for Batman enthusiasts, it's designed to share detailed information and celebrate the legacy of the Dark Knight.
        </p>
        <h1 className='sm:text-4xl sm:p-2 text-5xl font-anton '>How to Navigate?</h1>
        <p className='sm:text-2xl sm:p-2 text-sm tracking-wide font-web border-b-2 border-gray-400'>
          Use the navigation bar to explore different sections like Characters, Movies, and Q&A for quick insights.
        </p>

      </div>

    </>
    )
}

export default Home