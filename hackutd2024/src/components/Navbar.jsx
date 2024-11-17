import React from 'react';
import Logo from '../assets/toyota-logo-1.png';

function Navbar() {
  return (
    <div>
      <div>
        {/* Navbar Container */}
        <div className="flex align-middle justify-between items-center px-8 py-4">
          {/* Logo Section */}
          <div className="flex justify-center h-1/6 w-1/6">
            <img
              src={Logo}
              alt="Logo"
              className="flex justify-center h-full w-full object-contain"
              height={75}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
