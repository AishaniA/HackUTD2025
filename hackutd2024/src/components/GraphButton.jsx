import React, { useState } from 'react';
import Graph from '../assets/graph.png'

function GraphButton() {
  // State to control the visibility of the image
  const [showImage, setShowImage] = useState(false);

  // Function to toggle the image visibility
  const handleButtonClick = () => {
    setShowImage(!showImage);
  };

  return (
    <div className="flex flex-col items-center p-4 align-middle">
      {/* Button to toggle image */}
      <button
        onClick={handleButtonClick}
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700 transition-colors align-middle top-20px"
      >
        {showImage ? '' : 'Create Graph'}
      </button>

      {/* Image shown conditionally based on showImage state */}
      {showImage && (
        <img
          src={Graph}
          alt="Chart"
          className="mt-4 w-48 h-48 object-cover align-middle"
        />
      )}
    </div>
  );
}

export default GraphButton;
