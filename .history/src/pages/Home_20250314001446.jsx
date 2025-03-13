import React from 'react'
import Header from '../components/Header'

const Home = () => {
  return (
    <>
    <div className="w-full h-screen">
      <img src="/bannerPic.webp" className="w-full h-full " />
      </div>
      <div className='my-5 mx-5'>
        <h1 className='text-5xlp-2'>What is this?</h1>
        <p>
          This is personal project which features key information on Batman.
          Built out of Fandom.
        </p>
      </div>
    </>
    )
}

export default Home