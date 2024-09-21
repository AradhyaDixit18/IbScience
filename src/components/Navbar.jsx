import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md fixed top-0 left-0 right-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex space-x-4 items-center">
            <Link to="/" className="text-gray-700 hover:text-blue-600 text-lg">IBScience</Link>
            <Link to="#" className="text-gray-500 hover:text-blue-600">Online Courses</Link>
            <div className="relative group">
              <button className="text-gray-500 group-hover:text-blue-600">Free Material</button>
              <div className="absolute mt-2 py-2 w-48 bg-white rounded-lg shadow-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <Link to="/subject/physics" className="block px-4 py-2 text-gray-800 hover:bg-blue-600 hover:text-white">Physics</Link>
                <Link to="/subject/chemistry" className="block px-4 py-2 text-gray-800 hover:bg-blue-600 hover:text-white">Chemistry</Link>
                <Link to="/subject/math" className="block px-4 py-2 text-gray-800 hover:bg-blue-600 hover:text-white">Mathematics</Link>
              </div>
            </div>
            <Link to="#" className="text-gray-500 hover:text-blue-600">Free Tutorial Classes</Link>
          </div>
          <div className="flex items-center">
            <button className="text-gray-600 hover:text-blue-600 px-4">Sign In</button>
            <button className="bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600">Register</button>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
