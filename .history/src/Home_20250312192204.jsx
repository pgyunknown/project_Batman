import React from 'react'
import Header from './components/Header'

const Home = () => {
  return (
    <>
      <Header></Header>
    <div class="fixed w-full h-[50vh] md:h-[100vh]">
      <img src="/bannerPic.webp" class="w-full h-full object-fill" />
      <div class="absolute inset-0 flex items-start justify-center mt-10">
          <h1 class="text-black text-3xl md:text-5xl lg:xl font-bold">Gymgasm!</h1>
      </div>
      </div>
      <div>
        
      </div>
    </>
    )
}

export default Home