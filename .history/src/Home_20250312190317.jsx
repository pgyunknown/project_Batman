import React from 'react'
import Header from './components/Header'

const Home = () => {
  return (
    <>
      <Header></Header>
      <p>Gymgasm</p>
      <img src='/bannerPic.webp' className='sm:h-[92vh] h-[50vh]'/>
    </>
    )
}

export default Home