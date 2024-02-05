import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className=" bg-black text-white p-4 flex items-center justify-between">
      {/* Бургер-меню для мобільних пристроїв (зліва) */}
      <div className="md:hidden">
        <button className="text-white focus:outline-none" onClick={toggleMenu}>
          <svg className="h-6 w-6" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
            <path d="M4 6h16M4 12h16m-7 6h7"></path>
          </svg>
        </button>

        {/* Відображення бургер-меню при відкритті */}
        {isOpen && (
          <div className="absolute top-0 left-0 w-full h-full bg-gray-800 bg-opacity-75 flex items-center justify-center">
            <div className="text-white text-2xl">
              <Link to="/" onClick={toggleMenu} className="block py-2">Головна</Link>
              <Link to="/service" onClick={toggleMenu} className="block py-2">Послуги</Link>
            </div>
          </div>
        )}
      </div>

      <div className="hidden md:flex items-center space-x-4 ml-20 text-xl">
        <Link to="/" className="mr-20">Головна</Link>
        <Link to="/service">Послуги</Link>
      </div>

      <div className="flex items-center space-x-4 ml-auto mr-20">
        <img src="/path/to/logo.png" alt="Логотип" className="h-8 w-8" />
      </div>
    </div>
  );
};

export default Header;
