import React from 'react'

const Header = () => {
  return (
    <>
      <nav className='sticky z-50 top-0 py-5  drop-shadow-2xl'>
        <div className='container px-4 mx-auto relative text-sm'>
          <div className='flex justify-center items-center'>
            <div className='flex items-center flex-shrink-0'>
              <img className='h-8 w-8 mr-2' src='public/BatLogo.png'/> 
            </div>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Header