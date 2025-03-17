import React from 'react'

const Footer = () => {
  return (
  <footer className="bg-black text-white py-6 md:mt-5 m-0">
  <div className="container mx-auto flex flex-col md:flex-row items-center justify-between md:px-4">
    <p className="mb-3 md:m-0 text-xs md:text-sm">made with ❤️</p>
    <div className="flex space-x-6">

      
      <a href="https://github.com" target="_blank" className="hover:text-gray-400">
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2C6.48 2 2 6.48 2 12c0 4.42 2.87 8.18 6.84 9.5.5.09.66-.22.66-.48v-1.7c-2.78.6-3.37-1.34-3.37-1.34-.45-1.16-1.1-1.47-1.1-1.47-.9-.62.07-.61.07-.61 1 .07 1.52 1.04 1.52 1.04.89 1.52 2.34 1.08 2.91.83.09-.64.35-1.08.63-1.33-2.22-.25-4.56-1.11-4.56-4.93 0-1.09.39-1.98 1.02-2.67-.1-.25-.44-1.27.1-2.65 0 0 .84-.27 2.75 1.02a9.43 9.43 0 012.5-.34c.85 0 1.71.11 2.5.34 1.91-1.29 2.75-1.02 2.75-1.02.54 1.38.2 2.4.1 2.65.64.69 1.02 1.58 1.02 2.67 0 3.84-2.34 4.68-4.57 4.93.36.31.68.91.68 1.84v2.73c0 .27.16.58.67.48A10.003 10.003 0 0022 12c0-5.52-4.48-10-10-10z"/>
        </svg>
      </a>


      <a href="https://twitter.com" target="_blank" className="hover:text-white">
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M23 4.5c-.8.4-1.6.7-2.5.8a4.4 4.4 0 001.9-2.4c-.9.5-1.8.9-2.8 1.1a4.4 4.4 0 00-7.5 4c-3.6-.2-6.8-1.9-8.9-4.4A4.3 4.3 0 002 6.6c0 1.5.8 2.9 2 3.6a4.3 4.3 0 01-2-.6v.1c0 2.1 1.4 3.8 3.2 4.2-.4.1-.9.2-1.4.2-.3 0-.7 0-1-.1.7 2 2.5 3.5 4.7 3.5A8.9 8.9 0 012 19.5a12.3 12.3 0 006.6 2c7.9 0 12.3-6.6 12.3-12.3v-.5c.9-.7 1.6-1.5 2.2-2.5z"/>
        </svg>
      </a>

      <a href="https://linkedin.com" target="_blank" className="hover:text-blue-700">
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