import React from 'react'

const Footer = () => {
  return (
    <footer>
    <div className='w-full'>
      <span>made with ❤️</span>
      <span>BatWerse</span>
      <p class="mb-4 text-sm">Follow us on</p>
    <div class="flex space-x-6">
      <a href="https://facebook.com" target="_blank" class="hover:text-blue-500">
        <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M22 12a10 10 0 10-11 9.95v-7.03h-2v-2.92h2V9.85c0-2.09 1.24-3.24 3.14-3.24.9 0 1.84.17 1.84.17v2h-1.04c-1.02 0-1.33.63-1.33 1.28v1.56h2.27l-.36 2.92h-1.91v7.03A10 10 0 0022 12z"/>
        </svg>
      </a>
      <a href="https://twitter.com" target="_blank" class="hover:text-blue-400">
        <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M8 19c7.5 0 11.6-6 11.6-11.6v-.5A8.3 8.3 0 0022 5.9a8.2 8.2 0 01-2.3.6 4 4 0 001.8-2.2 8.1 8.1 0 01-2.6 1 4 4 0 00-7 3.6 11.3 11.3 0 01-8.2-4.2A4 4 0 004 9.8a4 4 0 001.8 3.3 4 4 0 01-1.8-.5v.1a4 4 0 003.2 3.9 4 4 0 01-1.8.1 4 4 0 003.7 2.8A8.1 8.1 0 014 17.3a11.5 11.5 0 006 1.7"/>
        </svg>
      </a>
      <a href="https://linkedin.com" target="_blank" class="hover:text-blue-700">
        <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20 2H4a2 2 0 00-2 2v16a2 2 0 002 2h16a2 2 0 002-2V4a2 2 0 00-2-2zM8 18H5v-7h3v7zM6.5 9.5a1.5 1.5 0 110-3 1.5 1.5 0 010 3zM19 18h-3v-4c0-1.1-.9-2-2-2s-2 .9-2 2v4h-3v-7h3v1a4 4 0 013-1.2c2.2 0 4 1.8 4 4v3z"/>
        </svg>
      </a>
    </div>
    <p class="mt-4 text-xs">&copy; 2025 Your Company. All rights reserved.</p>
    </div>
    </footer>
  )
}

export default Footer