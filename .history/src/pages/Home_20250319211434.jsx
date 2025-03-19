import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import Popup from '../components/PopUp';

const Home = () => {
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    const hasVisited = localStorage.getItem('hasVisited');

    if (!hasVisited) {
      setShowPopup(true);
      localStorage.setItem('hasVisited', 'true');
    }
  }, []);

  const handleClosePopup = () => {
    setShowPopup(false);
  };

  return (
    <>
      {showPopup && <Popup onClose={handleClosePopup} />}

      <div className="w-full sm:h-screen">
        <img src="/bannerPic.webp" className="w-full sm:h-[100vh] h-[50vh]" />
      </div>

      <div className="sm:my-5 sm:mx-25 my-5 mx-5">
        <h1 className="sm:text-4xl sm:p-2 text-xl font-personal">What is this?</h1>
        <p className="sm:text-2xl sm:p-2 text-sm tracking-wide font-batmanFont">
          This is a personal project featuring key information about Batman.
        </p>
      </div>

      <div className="sm:my-5 sm:mx-25 text-2xl my-5 mx-5">
        <h1 className="sm:text-4xl sm:p-2 text-3xl font-personal">What is this?</h1>
        <p className="sm:text-2xl sm:p-2 text-base font-batmanFont">
          This is a personal project featuring key information about Batman.
        </p>
      </div>

      <div className="sm:my-5 sm:mx-25 text-2xl my-5 mx-5">
        <h1 className="sm:text-4xl sm:p-2 text-3xl font-personal">What is this?</h1>
        <p className="sm:text-2xl sm:p-2 text-base font-batmanFont">
          This is a personal project featuring key information about Batman.
        </p>
      </div>
    </>
  );
};

export default Home;
