import React from 'react'

const Footer = () => {
  return (
  <footer className="bg-black text-white py-6 md:mt-5 ">
  <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-4">
    <p className="mb-3 md:m-0 text-xs md:text-sm">made with ❤️</p>
    <div className="flex space-x-6">

      
      <a href="https://github.com/pgyunknown" target="_blank" className="hover:text-gray-400">
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2C6.48 2 2 6.48 2 12c0 4.42 2.87 8.18 6.84 9.5.5.09.66-.22.66-.48v-1.7c-2.78.6-3.37-1.34-3.37-1.34-.45-1.16-1.1-1.47-1.1-1.47-.9-.62.07-.61.07-.61 1 .07 1.52 1.04 1.52 1.04.89 1.52 2.34 1.08 2.91.83.09-.64.35-1.08.63-1.33-2.22-.25-4.56-1.11-4.56-4.93 0-1.09.39-1.98 1.02-2.67-.1-.25-.44-1.27.1-2.65 0 0 .84-.27 2.75 1.02a9.43 9.43 0 012.5-.34c.85 0 1.71.11 2.5.34 1.91-1.29 2.75-1.02 2.75-1.02.54 1.38.2 2.4.1 2.65.64.69 1.02 1.58 1.02 2.67 0 3.84-2.34 4.68-4.57 4.93.36.31.68.91.68 1.84v2.73c0 .27.16.58.67.48A10.003 10.003 0 0022 12c0-5.52-4.48-10-10-10z"/>
        </svg>
      </a>


<a href="https://x.com/cody_hunk?t=EkARfGCWhhBT_BHbby4DGw&s=08" target="_blank" className="hover:text-white">
  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 512 462.799" xmlns="http://www.w3.org/2000/svg">
    <path fillRule="evenodd" clipRule="evenodd" d="M403.229 0h78.506L310.219 196.04 512 462.799H354.002L230.261 301.007 88.669 462.799h-78.56l183.455-209.683L0 0h161.999l111.856 147.88L403.229 0zm-27.556 415.805h43.505L138.363 44.527h-46.68l283.99 371.278z"/>
  </svg>
</a>


      <a href="https://www.linkedin.com/in/p-gokul-yadav-82548a295?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" className="hover:text-blue-700">
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20 2H4a2 2 0 00-2 2v16a2 2 0 002 2h16a2 2 0 002-2V4a2 2 0 00-2-2zM8 18H5v-7h3v7zM6.5 9.5a1.5 1.5 0 110-3 1.5 1.5 0 010 3zM19 18h-3v-4c0-1.1-.9-2-2-2s-2 .9-2 2v4h-3v-7h3v1a4 4 0 013-1.2c2.2 0 4 1.8 4 4v3z"/>
        </svg>
      </a>
    </div>
    <p className="mt-3 md:m-0 text-xs md:text-sm">&copy; 2025 Chill Dev.</p>
  </div>
</footer>

  )
}

export default Footer