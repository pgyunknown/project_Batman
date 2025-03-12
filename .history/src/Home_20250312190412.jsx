import React from 'react'
import Header from './components/Header'

const Home = () => {
  return (
    <>
      <Header></Header>
      <p className='text-9xl'>Gymgasm</p>
      <img src='/bannerPic.webp' className='sm:h-[100vh] sm:fixed h-[50vh]'/>
    </>
    )
}

export default Home