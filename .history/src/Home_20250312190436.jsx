import React from 'react'
import Header from './components/Header'

const Home = () => {
  return (
    <>
      <Header></Header>
      
      <img src='/bannerPic.webp' className='sm:h-[100vh] sm:fixed h-[50vh]' />
      <p className='text-9xl right-5'>Gymgasm</p>
    </>
    )
}

export default Home