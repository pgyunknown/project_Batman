  // import React from 'react'
  // import { useState } from 'react'

  // const Header = () => {
  //   const [mobileOpen, setMobileOpen] = useState(false)

  //   const toggleButton = () => {
  //     setMobileOpen(!mobileOpen);
  //   }
  //   return (
  //     <>
  //       <nav className='sticky z-50 top-0 py-5  drop-shadow-2xl'>
  //         <div className='container px-4 mx-auto relative text-sm'>
  //           <div className='flex justify-center items-center '>
  //             <div className='flex items-center flex-shrink-0'>
  //               <img className='h-8 w-6 mr-2' src='/BatLogo.png' />
  //               <span className='text-xl tracking-tight'>BatWerse</span>
  //             </div>
  //             <ul className='hidden lg:flex md:flex ml-5 space-x-5'>
  //               <li>Home</li>
  //               <li>Chart</li>
  //               <li>Movies</li>
  //               <li>About</li>
  //             </ul>
  //             <div className='lg:hidden md:hidden sm:order-3'>
  //             <button onClick={toggleButton}>
  //               {mobileOpen ? (
  //                 <img src='/batOpen.png' alt='Open Icon' className='w-6 h-6' />
  //               ) : (
  //                 <img src='/batClose.png' alt='Close Icon' className='w-6 h-6' />
  //               )}
  //             </button>
  //           </div>
  //           </div>
  //         </div>
  //       </nav>
  //     </>
  //   )
  // }

  // export default Header

  import React, { useState } from 'react';

  const Header = () => {
    const [mobileOpen, setMobileOpen] = useState(false);

    const toggleButton = () => {
      setMobileOpen(!mobileOpen);
    };

    return (
      <nav className='font-web z-50 top-0 py-5 drop-shadow-2xl bg-white '>
        <div className='container px-4 mx-auto relative text-sm'>
          <div className='flex justify-between items-center'>
            <div className='flex items-center flex-shrink-0 '>
              <img className='h-8 w-6 mr-2' src='/batMan.png' alt='Logo' />
              <span className='text-xl tracking-tight'>BatWerse</span>
            </div>
            
            <ul className='hidden lg:flex md:flex  space-x-5'>
              <li>Home</li>
              <li>Characters</li>
              <li>Movies</li>
              <li>About</li>
            </ul>
            
            <div className='lg:hidden md:hidden'>
              <button onClick={toggleButton} className="object-cover ">
                {mobileOpen ? (
                  <img src='/batOpen.png'  alt='Open Icon' className='h-12 w-8' />
                ) : (
                  <img src='/batClose.png' alt='Close Icon' className='h-8 w-8 ' />
                )}
              </button>
            </div>
          </div>
            {mobileOpen && (
            <div className='fixed right-0 z-20 bg-black lg:hidden md:hidden flex justify-center items-ce w-full p-2  '>
              <ul className='flex flex-col text-white  space-y-2 border-amber-300'>
                <li>Home</li>
                <li>Characters</li>
                <li>Movies</li>
                <li>About</li>
              </ul>
            </div>
          )}
        </div>
    
      </nav>
    );
  };

  export default Header;
