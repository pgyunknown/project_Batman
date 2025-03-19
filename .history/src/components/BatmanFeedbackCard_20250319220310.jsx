import React from 'react';

export default function BatmanFeedbackCard() {
  return (
    <div className='flex justify-center items-center '>
      <div className='bg-gray-900 text-white w-80 rounded-2xl shadow-lg p-4'>
        <h2 className='text-xl font-bold mb-2 text-center'>Got Feedback?</h2>
        <p className='text-gray-300 mb-4 text-center'>Your thoughts help improve the Batcave. Reach out to your Guy!</p>
        <button className='bg-yellow-500 text-black px-4 py-2 rounded-lg hover:bg-yellow-600 transition w-full'>Contact Us</button>
      </div>
    </div>
  );
}
