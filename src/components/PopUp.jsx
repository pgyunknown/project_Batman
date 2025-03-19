import { useState, useEffect } from "react";

const Popup = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const hasVisited = localStorage.getItem("hasVisited");
    if (!hasVisited) {
      setIsVisible(true);
      localStorage.setItem("hasVisited", "true");
    }
  }, []);

  const handleClose = () => {
    setIsVisible(false);
  };

  return (
    isVisible && (
      <div className="fixed inset-0 flex items-center justify-center bg-black/50">
        <div className="bg-white p-6 rounded-lg shadow-lg w-96 relative">
          <h2 className="text-2xl font-semibold mb-4">Welcome to the Homepage!</h2>
          <p className="mb-4">This popup appears only once. Enjoy your stay!</p>
          <button
            onClick={handleClose}
            className="absolute top-2 right-2 text-xl font-bold text-gray-600 hover:text-black"
          >
            &times;
          </button>
        </div>
      </div>
    )
  );
};

export default Popup;
