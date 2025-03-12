import React from 'react'
import Header from './components/Header'

const Home = () => {
  return (
    <>
      <Header></Header>
      
      <p className='text-9xl right-5'>Gymgasm</p>
      <img src='/bannerPic.webp' className='sm:h-[100vh] sm:relative h-[50vh]' />
    </>
    )
}

export default Home