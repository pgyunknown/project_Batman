import React from 'react'
import Header from '../components/Header'
import Popup from '../components/PopUp'

const Home = () => {
  return (
    <>
      
    <div className="w-full sm:h-screen font-babas text-2xl ">
      <img src="/bannerPic.webp" className="w-full  sm:h-[100vh] h-[50vh] " />
      </div>
      <div className='sm:my-5 sm:mx-25  my-5 mx-5'>
        <h1 className='sm:text-4xl sm:p-2 text-xl '>What is this?</h1>
        <p className='sm:text-2xl sm:p-2 text-sm tracking-wide ōfont-batmanFont'>
          This is personal project which features key information on Batman.
        </p>
      </div>
            <div className='sm:my-5 sm:mx-25 text-2xl my-5 mx-5'>
        <h1 className='sm:text-4xl sm:p-2 text-3xl '>What is this?</h1>
        <p className='sm:text-2xl sm:p-2 text-base font-batmanFont'>
          This is personal project which features key information on Batman.
        </p>
      </div>
            <div className='sm:my-5 sm:mx-25 text-2xl my-5 mx-5'>
        <h1 className='sm:text-4xl sm:p-2 text-3xl '>What is this?</h1>
        <p className='sm:text-2xl sm:p-2 text-base '>
          This is personal project which features key information on Batman.
        </p>
      </div>

    </>
    )
}

export default Home