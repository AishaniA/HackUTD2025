import React from 'react';
import Logo from '../assets/toyota-logo-1.png';

function Navbar() {
  return (
    <div>
      <div>
        {/* Content */}
        <div className="flex items-center justify-between px-8 py-4">
          {/* Logo and Title */}
          <div className="h-1/6 w-1/6">
            <img 
              src={Logo} 
              alt="Logo"
              className="flex h-full w-full object-contain" 
              height = {100}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
