import React from 'react'
import Header from '../components/Header'

const Home = () => {
  return (
    <>
    <div className="w-full sm:h-screen h-[90vh]">
      <img src="/bannerPic.webp" className="w-full " />
      </div>
      <div className='sm:my-5 sm:mx-25 text-2xl my-5 mx-5'>
        <h1 className='sm:text-4xl sm:p-2 '>What is this?</h1>
        <p className='sm:text-2xl sm:p-2 text-base '>
          This is personal project which features key information on Batman.
        </p>
      </div>
    </>
    )
}

export default Home