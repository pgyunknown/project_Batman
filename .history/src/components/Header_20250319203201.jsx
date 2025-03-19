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
import { Link } from 'react-router-dom';

  const Header = () => {
    const [mobileOpen, setMobileOpen] = useState(false);

    const toggleButton = () => {
      setMobileOpen(!mobileOpen);
    };
    const closeMenu=()=>setMobileOpen(false);
    return (
      <nav className=' z-50 top-0 py-5 shadow-2xl shadow-gray-800  bg-white '>
        <div className='container px-4 mx-auto relative text-sm'>
          <div className='flex justify-between items-center'>
            <div className='flex items-center flex-shrink-0 '>
              <Link to={'/'}><img className='h-8 w-6 mr-2' src='/batMan.png' alt='Logo' /></Link>
              <span className='sm:text-xl text-lg tracking-tight font-batmanFont'>BatWerse</span>
            </div>
            
            <ul className='hidden lg:flex md:flex  space-x-5 text-xl font-batmanFont'>
              <li><Link to='/'>Home</Link></li>
              <li><Link to='/Characters'>Characters</Link></li>
              <li><Link to='/Movies'>Movies</Link></li>
              <li><Link to='/About'>About</Link></li>
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
            <div className='fixed right-0 z-100 bg-black lg:hidden md:hidden flex justify-center items-center w-full p-2  '>
              <ul className='flex flex-col text-white  space-y-2 tracking-widest font-thin font-batmanFont'>
              <li><Link to='/' onClick={closeMenu}>Home</Link></li>
              <li><Link to='/Characters' onClick={closeMenu}>Characters</Link></li>
              <li><Link to='/Movies' onClick={closeMenu}>Movies</Link></li>
              <li><Link to='/About' onClick={closeMenu}>About</Link></li>
              </ul>
            </div>
          )}
        </div>
    
      </nav>
    );
  };

  export default Header;
