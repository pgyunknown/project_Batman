import React from 'react';

export default function BatmanFeedbackCard() {
  return (
    <div className='flex justify-center items-center my-8 font-web'>
      <div className='bg-black text-white w-80 rounded-2xl shadow-lg p-4'>
        <h2 className='text-xl font-bold mb-2 text-center'>Got Feedback?</h2>
        <p className='text-gray-300 mb-4 text-center'>Your thoughts help improve the Batcave. Reach out to your Guy!</p>
      </div>
    </div>
  );
}
