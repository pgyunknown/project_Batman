import React from 'react'
import Header from './components/Header'

const Home = () => {
  return (
    <>
      <Header></Header>
    <div class="relative w-full h-[50vh] md:h-[100vh]">
      <img src="/bannerPic.webp" class="w-full h-full object-cover" />
      <div class="absolute flex items-start justify-center mt-10">
          <h1 class="text-black text-3xl md:text-5xl font-bold">Gymgasm!</h1>
      </div>
      </div>
      <div>

      </div>
    </>
    )
}

export default Home