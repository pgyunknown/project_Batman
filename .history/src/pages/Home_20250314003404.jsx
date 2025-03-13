import React from 'react'
import Header from '../components/Header'

const Home = () => {
  return (
    <>
    <div className="w-full sm:h-screen h-lvw">
      <img src="/bannerPic.webp" className="w-full h-full " />
      </div>
      <div className='sm:my-5 sm:mx-25 text-2xl'>
        <h1 className='sm:text-5xl p-2'>What is this?</h1>
        <p className='text-base'>
          This is personal project which features key information on Batman.
          Built out of Fandom.
        </p>
      </div>
    </>
    )
}

export default Home