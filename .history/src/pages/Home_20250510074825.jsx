import React from 'react'
import Header from '../components/Header'
import Popup from '../components/PopUp'
import BatmanFeedbackCard from '../components/BatmanFeedbackCard'

const Home = () => {
  return (
    <>
      <div>
        <span>
          
        </span>
      </div>
    <div className="w-full sm:h-screen  text-2xl">
      <img src="/bannerPic.webp" className="w-full  sm:h-[100vh] h-[50vh] " />
      </div>
      <div className='pt-5 pb-5'>
      <div className='md:my-5 md:mx-5 p-2 md:p-0'>
        <h1 className=' text-xl sm:p-2 md:text-3xl font-anton tracking-wide font-semibold'>What is this?</h1>
        <p className='sm:text-3xl sm:p-2 text-sm tracking-wide font-web border-b-2 border-gray-400'>
          This project aims to provide a comprehensive guide to Batman's universe, exploring his characters, storylines, and cultural impact.As a passion project for Batman enthusiasts, it's designed to share detailed information and celebrate the legacy of the Dark Knight.
        </p>
      </div>
      <div className='md:my-5 md:mx-5 p-2 md:p-0'>
        <h1 className='text-xl sm:p-2 md:text-3xl font-anton tracking-wide font-semibold'>How to Navigate?</h1>
        <p className='sm:text-3xl sm:p-2 text-sm tracking-wide font-web border-b-2 border-gray-400'>
          Use the navigation bar to explore different sections like Characters, Movies, and Q&A for quick insights.
        </p>
      </div>
      <div className='md:my-5 md:mx-5 p-2 md:p-0'>
        <h1 className='text-xl sm:p-2 md:text-3xl font-anton tracking-wide font-semibold'>Which technologies were used to build this project?</h1>
        <p className='sm:text-3xl sm:p-2 text-sm tracking-wide font-web border-b-2 border-gray-400'>
          The project is built using React(Vite), Tailwind CSS, and JavaScript, combining a responsive design for an engaging experience.
        </p>
      </div>
            <div className='md:my-5 md:mx-5 p-2 md:p-0'>
        <h1 className='text-xl sm:p-2 md:text-3xl font-anton tracking-wide font-semibold'>What content can I find here?</h1>
        <p className='sm:text-3xl sm:p-2 text-sm tracking-wide font-web border-b-2 border-gray-400'>
          You'll find character bios, iconic quotes, storyline summaries, and character appearances in Batman universe.
        </p>
      </div>

            <div className='md:my-5 md:mx-5 p-2 md:p-0'>
        <h1 className='text-xl sm:p-2 md:text-3xl font-anton tracking-wide font-semibold'>Is this project still a work in progress?</h1>
        <p className='sm:text-3xl sm:p-2 text-sm tracking-wide font-web border-b-2 border-gray-400'>
          Yes, the project is continually updated to include more characters, storylines, and trivia.
        </p>
      </div>
      </div>
      <BatmanFeedbackCard/>
    </>
    )
}

export default Home